import { useEffect } from "react"
import { useState } from "react"
const Timeline = () => {
    const [posts, setPosts] =useState([])
    useEffect(async() =>{
        console.log("rendering timeline...")
        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = await req.json()
        setPosts(res)
        
    }, [])
    
    return(
        <div>
            <h3>Timeline</h3>
            {

            }
        </div>
    )
}
export default Timeline