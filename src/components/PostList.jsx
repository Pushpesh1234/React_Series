import { Card } from "./PostCreated"
import { useContext } from "react"
import { LPost } from '../store/PostListStore'
import FetchPostList from "./FetchPostList"
import {useState} from "react"

export const PostList = () => {


    const { currentPost,onInitialPost } = useContext(LPost)
    const [isFetched,setIsFetched]=useState(false)

     if(!isFetched){
        fetch("https://dummyjson.com/posts")
       .then((res)=>res.json())
       .then((data)=>{onInitialPost(data.posts)})
       setIsFetched(true)
     }
       
    
    return (
        <>
           { currentPost.length === 0 && <FetchPostList />}

            {currentPost.map((post, i) => {
                return <Card key={i} post={post} id={i}></Card>
            })}

        </>


    )

}