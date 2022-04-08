import {useState} from 'react'
const Post = ({posts}) => {
    const[likes,setLikes]=useState(0)
    return(
        <div>
            <img src = {posts.image} height="50" width="50"></img>
         <p>{posts.username} • {likes} likes</p>
         <button onClick={() => {setLikes(likes +1)}}><i class="fa-solid fa-heart" style={{color: '#d33'}}></i></button>
    <p>{posts.content}</p>
             </div>
    )
}
export default Post