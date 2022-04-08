import { useEffect,useState,React } from "react"
import Post from "./Post.js"
const Timeline = () => {
    const [posts, setPosts] =useState([])
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