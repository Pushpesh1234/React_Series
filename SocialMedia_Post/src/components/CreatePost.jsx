import { useRef } from "react";
import { useContext } from "react";
import { LPost } from '../store/PostListStore'
import { IoIosCreate } from "react-icons/io";

export const Form = () => {
  const { onAddPost } = useContext(LPost)

  const postData = useRef()
  const postReactions = useRef()
  const postTitle = useRef()
  const postTags=useRef()


  const onPostHandler = (e, postData, postReactions, postTitle,postTags) => {
    console.log(postTags.current.value.split(' '))
    onAddPost(
      e,
      postData.current.value,
      postReactions.current.value,
      postTitle.current.value,
      postTags.current.value.split(' ')
    )

    postData.current.value = ''
    postReactions.current.value = ''
    postTitle.current.value = ''
    postTags.current.value=''

  }

  return (

    <form 
    onSubmit={(e) => { 
      onPostHandler(e, postData, postReactions, postTitle,postTags) 
    }
      }>

      <div className="mb-3">

        <input 
        type="text" 
        id="title" 
        placeholder="Post Title" 
        className="form-control post-title" 
        ref={postTitle}>
        </input>

        <textarea ref={postData}
          className="form-control post-body"
          placeholder="What's on Your mind?"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>

        <input 
        type="text"
        id="tags" 
        className="form-control post-hastags" 
        placeholder="Put your hastags here"
        ref={postTags}>  
        </input>

        <input 
        type="text" 
        id="reactions" 
        className="form-control post-reaction-counter" placeholder="Reactions No." 
        ref={postReactions}>
        </input>

        <button className="post-icon-button" >
           <IoIosCreate />
        </button>

      </div>
    </form>


  );
};
