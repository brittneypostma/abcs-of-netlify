export const getGlobalData = () => {
  const title = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "ABC's of Netlify"
  const description = process.env.BLOG_DESCRIPTION
    ? decodeURI(process.env.BLOG_DESCRIPTION)
    : "The ABCs of Netlify is a website and video series showcasing some of the amazing features and people at Netlify for each letter of the alphabet narrated by Cappy, the capybara."
  return {
    title,
    description
  }
}
