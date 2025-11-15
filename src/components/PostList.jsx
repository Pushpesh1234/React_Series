import { Card } from "./PostCreated"
import { useContext } from "react"
import {LPost} from '../store/PostListStore'

export const PostList=()=>{

const {currentPost,onSubmitPost}=useContext(LPost) 
console.log(currentPost)
    return(
      currentPost.map(post=>{
    return(
        <Card post={post.body}></Card>
    )
   })   
        
    )
}