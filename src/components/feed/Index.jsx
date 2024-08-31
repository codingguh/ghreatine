import posts from "../../data/posts"
import Post from "./post/Index"

const Feed = () => {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}



export default Feed
