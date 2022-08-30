import Letter from './Letter'
import Description from './Description'

// h2 with title block letter on left
// p with description on right
export default function Left({ post }) {
  return (
    <>
      <Letter>{post.data.title}</Letter>
      {post.data.description && (
        <Description>
          {post.data.description}
        </Description>
      )}
    </>
  )
}