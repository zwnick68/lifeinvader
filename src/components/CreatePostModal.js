const CreatePostModal = ({newPostModalVisible}) =>{
return (
<div className={newPostModalVisible ? "create-post-modal" : "create-post-modal-hidden"}>
                <h3>Create Post</h3>
                <textarea row="5" cols="300"/>
                <button type="submit">Create Post</button>
                
            </div>
            )
}
export default CreatePostModal