import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { LPost } from '../store/PostListStore'

export const Card = ({ post, id }) => {
  const { onDeletePost } = useContext(LPost)

  const onRemovePost = (e) => {
    onDeletePost(e, id)
  }
  // console.log(post.title)

  return (
    
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">

        <h5 className="card-title">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger post-delete-icon"
            onClick={(e) => { onRemovePost(e, id) }}>
            <AiFillDelete />
          </span>
          {post.title}
          <span
            style={{ margin: "0 30px" }}>
            User-{post.id}
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag, i) => {
          return (
          <span key={i} className="badge text-bg-primary post-tags">{tag}
          </span>)
        })}

        <div className="alert alert-success post-reaction" role="alert">
          Reacted by {post.reactions.likes} by people
        </div>
      </div>
    </div>

  )
}