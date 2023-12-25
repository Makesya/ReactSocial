import Post from "./Post"
const ListPosts = (props) => {
    
    return (
        <div>
            {props.posts.map((obj) => <Post message={obj.message} likesCount={obj.likesCount} />)}
        </div>
    )
}
export default ListPosts;