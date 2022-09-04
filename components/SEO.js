import Head from 'next/head'

export default function SEO({ title, description, ogImage }) {
  const url = 'https://abcs-of.netlify.app/'
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}images/${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Gr8087" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@Gr8087" />
      <meta property="og:url" content={url} />
      <meta name="twitter:image" content={`${url}images/${ogImage}`} />
    </Head>
  )
}
