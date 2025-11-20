import { createContext, useReducer } from "react"
import { useRef } from "react"
export const LPost = createContext({

    currentPost: [],
    onAddPost: () => { },
    onDeletePost: () => { },
    onInitialPost:()=>{}


})

const ReducePostList = (newPost, action) => {

    let post = newPost
    if (action.type === "NEW_POST") {
        const postId = String(newPost.length ? Math.max(...newPost.map(p => Number(p.id))) + 1 : 1)
        post = [
        {
            body: action.payload.postData,
            id: postId,
            reactions: action.payload.reactions,
            title: action.payload.title,
            tags: action.payload.tags

        }
        , ...newPost
        ]
        // console.log(post)
    }

    else if (action.type === "DEL_POST") {
        post = post.filter((p, i) => action.payload.id !== i)

        // console.log(post)
    }
    else if(action.type==="INTIAL_POST"){
        post=action.payload.Post
       
    }
    return post
}

const ListPostProvider = ({ children }) => {

    const [currentPost, dispatchPost] = useReducer(ReducePostList, [])

    const postId = useRef(3)

    const onAddPost = (e, postData, reactions, title,tags) => {
        e.preventDefault()
        const addPost = {
            type: "NEW_POST",
            payload: {
                postData,
                reactions,
                title,
                tags
            }
        }
        dispatchPost(addPost)
    }


     const onInitialPost = (Post) => {
        dispatchPost({
            type: "INTIAL_POST",
            payload: {
                Post
            }
        })
    }
    
    

    const onDeletePost = (e, id) => {
        const delPost = {
            type: "DEL_POST",
            payload: {
                id
            }
        }
        dispatchPost(delPost)
    }
    // console.log(currentPost)
    return (
        <LPost.Provider value={
            {
                currentPost,
                onAddPost,
                onDeletePost,
                onInitialPost

            }}>
            {children}
        </LPost.Provider>)
}




// const DEFAULTLIST = [{
//     id: "1",
//     title: 'Goining to Goa',
//     body: 'Vaction in Goa after a long time with familya nd friends.Peace',
//     reactions: '5',
//     user_id: 'user-56',
//     tags: ["Vactions", "beach", "relax"]
// },
// {
//     id: '2',
//     title: 'Graduation Completed',
//     body: 'Hi,Today is I am attending my graduation ceremony ,finally a Enginner',
//     reactions: '8',
//     user_id: 'user-5',
//     tags: ["Grauated", "new Journery", "btech"]
// }
// ]


export default ListPostProvider;