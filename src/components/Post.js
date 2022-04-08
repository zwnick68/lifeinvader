import {useState} from 'react'
const Post = ({posts}) => {
    const[likes,setLikes]=useState(0)
    return(
        <div>
            <img src = {posts.image} height="50" width="50"></img>
         <p>{posts.username} • {likes} likes</p>
         <button onClick={() => {setLikes(likes +1)}}>heart</button>
    <p>{posts.content}</p>
             </div>
    )
}
export default Post