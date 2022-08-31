import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Letter from '../components/Letter';
import Description from '../components/Description';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import styles from './home.module.css';

export default function Index({ posts, globalData }) {
  const { title, description } = globalData;
  return (
    <div className={styles.wrapper}>
      <SEO title={title} description={description} />
      <aside className={styles.aside}>
        <div className={styles.asideContainer}>
          <Link href="/">
            <a>
              <h1 className="md:text-4xl font-semibold">
                ABCs <br /> of Netlify
              </h1>
            </a>
          </Link>
        </div>
      </aside>
      <main className={styles.main}>
        <ul className="list">
          {posts.map((post, idx) => (
            <li key={post.filePath} className="">
              <Link
                as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/[slug]`}
              >
                <a className={styles.linkLetter}>
                  <Letter>{post.data.title}</Letter>
                  {post.data.description ? (
                    <Description>{post.data.description}</Description>
                  ) : null}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
