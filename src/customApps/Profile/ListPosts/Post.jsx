import css from './Post.module.css'
const Post = (props) => {
    return (
        <div className={css.main}>
            <div className={css.post}>
                <div className={css.message}>
                    <a href=""><img className={css.avatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" /></a>
                    <p>{props.message}</p>
                </div>
                <div className={css.likes}>
                    <p>{props.likesCount} ♥</p>
                </div>
            </div>
            
            <hr />
            
        </div>
    )
}
export default Post;