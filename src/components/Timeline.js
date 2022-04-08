import { useEffect,useState,React } from "react"
import Post from "./Post.js"
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
            <h3>Timeline</h3>
            <button onClick={() => {setNewPostModalVisible(true)}}>+New Post</button>
            <div className={newPostModalVisible ? "create-post-modal" : "create-post-modal-hidden"}>
                <h3>Create Post</h3>
                <textarea row="5" cols="300"/>
                <button type="submit">Create Post</button>
                
            </div>
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