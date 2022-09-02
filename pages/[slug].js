import { getGlobalData } from '../utils/global-data';
import {
  getPosts,
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import classnames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Aside from '../components/Aside/Aside';
import ArrowIcon from '../components/ArrowIcon';
import CustomLink from '../components/CustomLink';
import Video from '../components/Video';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import styles from './letter-page.module.scss';
import Letter from '../components/Letter/Letter';
import Navigation from '../components/Navigation/Navigation';
import MadeBy from '../components/MadeBy';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  Video,
};

export default function PostPage({
  posts,
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Navigation items={posts} hrefType="url" />
      <Aside />
      <main className={styles.main}>
        <header className={styles.header}>
          <Letter className={styles.letter} letter={frontMatter.title} />
        </header>
        <div className={styles.wrapper}>
          <div className={styles.markdown}>
            {frontMatter.description && (
              <h1 className={styles.title}>{frontMatter.description}</h1>
            )}
            <MDXRemote {...source} components={components} />
          </div>
          <div className={styles.paginationWrapper}>
            {prevPost && (
              <Link href={`/${prevPost.slug}`}>
                <a
                  className={classnames(
                    styles.paginationLink,
                    nextPost ? 'text-right' : null
                  )}
                >
                  <ArrowIcon
                    className={classnames(styles.paginationArrow, 'rotate-180')}
                  />
                  <p className="">Previous</p>
                </a>
              </Link>
            )}
            <p className={styles.paginationLetter}>{frontMatter.title}</p>
            {nextPost && (
              <Link href={`/${nextPost.slug}`}>
                <a className={styles.paginationLink}>
                  <p className="">Next</p>
                  <ArrowIcon className={styles.paginationArrow} />
                </a>
              </Link>
            )}
          </div>
        </div>
        <MadeBy />
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const posts = getPosts();
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getNextPostBySlug(params.slug);
  const nextPost = getPreviousPostBySlug(params.slug);

  return {
    props: {
      posts,
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
