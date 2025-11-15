import { useRef } from "react";
import { useContext } from "react";
import {LPost} from '../store/PostListStore'

export const Form = () => {
  const {onAddPost,onDeletePost}=useContext(LPost)
  const postData=useRef()

  const onPostHandler=(e, postData)=>{
    
    if(e.target.name="add"){
      onAddPost(e,postData.current.value)
      postData.current.value=''
    }

    else if(e.target.name="delete"){
      onDeletePost()
    }
   
  }
  
  return (
  
    <form onSubmit={(e)=>{onPostHandler(e,postData)}}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea ref={postData}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button name="add">Add</button>
        <button name="delete">DEL</button>
      </div>
      </form>
      
  
  );
};
