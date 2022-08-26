export const getGlobalData = () => {
  const title = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "ABC's of Netlify"
  const description = process.env.BLOG_DESCRIPTION
    ? decodeURI(process.env.BLOG_DESCRIPTION)
    : "The ABC's of Netlify is something to learn about Netlify for every letter of the alphabet."
  return {
    title,
    description
  }
}
