async function fetchedPostList(){
const res=await fetch('https://dummyjson.com/posts')
const data= await res.json()
 return data.posts.map(post=>post.title)
// .then(res=>res.json())
// .then(data=>data.posts)
}

// fetchedPostList().then(data=>console.log(data))
console.log(fetchedPostList())
