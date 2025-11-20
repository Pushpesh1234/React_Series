import { Card } from "./PostCreated"

const FetchPostList=({onGetInitalPost})=>{
    return(
        <center className="message-fetch-post">
            <h2>No Post Available</h2>
            <button className="bg-primary bt-text" onClick={onGetInitalPost} >Fetch Post From Server</button>
        </center>
       
    )
}

export default FetchPostList