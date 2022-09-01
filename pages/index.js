import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Letter from '../components/Letter/Letter';
import Aside from '../components/Aside/Aside';
import Description from '../components/Description';
import Layout from '../components/Layout/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import styles from './home.module.css';

export default function Index({ posts, globalData }) {
  const { title, description } = globalData;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Aside heading={true} />
      <main className={styles.main}>
        <ul className="list">
          {posts.map((post) => (
            <li className={styles.row} key={post.filePath}>
              <Letter />
              <Link
                as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/[slug]`}
              >
                <a className={styles.link}>
                  {post.data.description ? post.data.description : null}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
