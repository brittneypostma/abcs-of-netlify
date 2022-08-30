import Letter from './Letter'
import Description from './Description'
// h2 with title block letter on right
// p with description on left
export default function Right({ post }) {
  return (
    <>
      {post.data.description && (
        <Description>
          {post.data.description}
        </Description>
      )}
      <Letter>{post.data.title}</Letter>
    </>
  )
}