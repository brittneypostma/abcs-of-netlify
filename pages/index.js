import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Letter from '../components/Letter/Letter';
import Aside from '../components/Aside/Aside';
import ArrowIcon from '../components/ArrowIcon';
import Layout from '../components/Layout/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import styles from './home.module.scss';
import Navigation from '../components/Navigation/Navigation';

export default function Index({ posts, globalData }) {
  const { title, description } = globalData;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Navigation items={posts} hrefType="anchor" />
      <Aside heading={true} />
      <main id="main" className={styles.main}>
        <div className={styles.videoWrapper}>
          <video
            width="100%"
            preload="metadata"
            className={styles.video}
            autoPlay
            muted
            playsInline
          >
            <source src="/video/intro.mp4" type="video/mp4" />
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li id={post.data.title} className={styles.row} key={post.filePath}>
              <Letter className={styles.letter} letter={post.data.title} />
              <Link
                as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/[slug]`}
              >
                <a className={styles.link}>
                  <span className="flex items-center">
                    {post.data.description ? post.data.description : null}
                  </span>
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
