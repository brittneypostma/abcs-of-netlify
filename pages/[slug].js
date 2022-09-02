import { getGlobalData } from '../utils/global-data';
import {
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
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout/Layout';
import SEO from '../components/SEO';
import styles from './letter-page.module.css';
import Letter from '../components/Letter/Letter';

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
      <Aside />
      <article className={styles.article}>
        <header className={styles.header}>
          <Letter className={styles.letter} letter={frontMatter.title} />
        </header>
        <main className={styles.main}>
          <article className="">
            {frontMatter.description && (
              <p className="text-3xl font-semibold mb-4">
                {frontMatter.description}
              </p>
            )}
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className={styles.paginationWrapper}>
          {prevPost && (
            <Link href={`/${prevPost.slug}`}>
              <a
                className={classnames(
                  styles.paginationLink,
                  nextPost ? 'text-right' : null
                )}
              >
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/${nextPost.slug}`}>
              <a className={styles.paginationLink}>
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto md:ml-0" />
              </a>
            </Link>
          )}
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getNextPostBySlug(params.slug);
  const nextPost = getPreviousPostBySlug(params.slug);

  return {
    props: {
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
