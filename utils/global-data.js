export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : "ABC's of Netlify"
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "ABC's of Netlify"
  // const footerText = process.env.BLOG_FOOTER_TEXT
  //   ? decodeURI(process.env.BLOG_FOOTER_TEXT)
  //   : ""

  return {
    name,
    blogTitle,
    // footerText,
  }
}
