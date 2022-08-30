import Link from 'next/link'
import { getPosts } from '../utils/mdx-utils'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Left from '../components/Left'
import Right from '../components/Right'
import Layout, { GradientBackground } from '../components/Layout'
import Aside from '../components/Aside'
import ArrowIcon from '../components/ArrowIcon'
import { getGlobalData } from '../utils/global-data'
import SEO from '../components/SEO'

export default function Index({ posts, globalData }) {
  const { title, description } = globalData
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Aside />
      {/* <Header /> */}
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.title}
        </h1>
        <ul className="w-full">
          {/* alternate left side then right side */}
          {posts.map((post, idx) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/[slug]`}
              >
                <a className="flex items-center justify-between w-full focus:outline-none focus:ring-4">
                  {
                    idx % 2 === 1 ? (
                      <Right post={post} />
                    ) : (
                      <Left post={post} />
                    )
                  }
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  const globalData = getGlobalData()

  return { props: { posts, globalData } }
}
