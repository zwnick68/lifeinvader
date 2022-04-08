import { useEffect,useState,React } from "react"
import Post from "./Post.js"
import CreatePostModal from "./CreatePostModal.js"
const Timeline = () => {
    const [posts, setPosts] =useState([])
    const [newPostModalVisible,setNewPostModalVisible]=useState(false)
    useEffect(() =>{
        // console.log("rendering timeline...")
        (async() =>{
        
        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = await req.json()
        setPosts(res)
        })()
    }, [])
    
    return(
        <div>
            
            <button onClick={() => {setNewPostModalVisible(true)}}>+New Post</button>
            <CreatePostModal newPostModalVisible={newPostModalVisible}/>
            {
                posts.map((posts)=> {
                    return(
                        <Post key={posts.id} posts={posts}/>
                    )
                })
    
            }
        </div>
    )
}

export default Timeline