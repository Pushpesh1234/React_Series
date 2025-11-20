import { Card } from "./PostCreated"
import { useContext } from "react"
import { LPost } from '../store/PostListStore'
import FetchPostList from "./FetchPostList"

export const PostList = () => {

    const { currentPost,onInitialPost } = useContext(LPost)
    const onfetchHandler=(e)=>{
         e.preventDefault()
       fetch("https://dummyjson.com/posts")
       .then((res)=>res.json())
       .then((data)=>{onInitialPost(data.posts)})
    }
    return (
        <>
           { currentPost.length === 0 && <FetchPostList onGetInitalPost={onfetchHandler} />}

            {currentPost.map((post, i) => {
                return <Card key={i} post={post} id={i}></Card>
            })}

        </>


    )

}