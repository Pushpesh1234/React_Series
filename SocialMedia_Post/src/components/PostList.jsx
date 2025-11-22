import { Card } from "./PostCreated"
import { useContext,useEffect} from "react"
import { LPost } from '../store/PostListStore'
import FetchPostList from "./FetchPostList"
import {useState} from "react"
import LoadingState from "./LoadingState"

export const PostList = () => {


    const { currentPost,onInitialPost } = useContext(LPost)
    const[Loading,setLoading]=useState(true)
    
      useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;
        fetch("https://dummyjson.com/posts",{signal})
       .then((res)=>res.json())
       .then((data)=>{onInitialPost(data.posts)
        setLoading(false)
       })
       .catch((err)=>{
        if(err.name==="AbortError"){
          console.log("Fetched Aborted")
          return;
        }
        else{
          console.error("Fetch Failed:",err)
        }
       })
       return ()=>{
         console.log("useEffect is cleaned up");
         controller.abort();
       };
      },[]) // ← Empty array = run ONLY once on mount
     

    
    return (
        <>
         {Loading&&<LoadingState/>}
           {!Loading&& currentPost.length === 0 && <FetchPostList />}

            {!Loading&&currentPost.map((post, i) => {
                return <Card key={i} post={post} id={i}></Card>
            })}

        </>


    )

}