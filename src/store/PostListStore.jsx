import { createContext, useReducer } from "react"
export const LPost=createContext({
    currentPost:[],
    onAddPost:()=>{},
    onDeletePost:()=>{}
})

const ReducePostList=(newPost,action)=>{
    let post=newPost
    if(action.type==="NEW_POST"){
        post=[...newPost,{title:action.payload.postData}]
        console.log("hello")
    }

    else if(action.type==="DEL_POST"){
        
    }
   
}

const ListPostProvider=({children})=>{
   
    const [currentPost,dispatchPost]=useReducer(ReducePostList,DEFAULTLIST)

    const onAddPost=(e,postData)=>{
        e.preventDefault()
        const addPost={
            type:"NEW_POST",
            payload:{
            postData  
            }
        }
        dispatchPost(addPost)
    }

    const onDeletePost=(e,postData)=>{
        const delPost={
            type:"DEL_POST",
            payload:{
           postData: postData,
            id:e.target.id  
            }
        }
        dispatchPost(delPost)
    }
    console.log(currentPost)
return (
<LPost.Provider value={{currentPost,onAddPost,onDeletePost}}>
    {children}
</LPost.Provider>)
}

const DEFAULTLIST=[{
    id:'1',
    title:'Goining to Goa',
    body:'Vaction in Goa after a long time with familya nd friends.Peace',
    reactions:'5',
    user_id:'user-56',
    tags:["Vactions","beach","relax"]
},
{
    id:'2',
    title:'Graduation Completed',
    body:'Hi,Today is I am attending my graduation ceremony ,finally a Enginner',
    reactions:'8',
    user_id:'user-5',
    tags:["Grauated","new Journery","btech"]
}
]

export default ListPostProvider;