import css from './Profile.module.css'
import CurrentImage from '../../customApps/CurrentImg/CurrentImg'
import NewPost from './ListPosts/NewPost'
import ListPosts from './ListPosts/ListPosts'
const Profile = (props) => {
    return (
        <div>
            <CurrentImage />

            <div className={css.card}>

                <div className={css.avatar}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" className="photo-avatar" />
                </div>
                <div>
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <NewPost newPostText={props.newPostText} 
                     updatePostText={props.updatePostText} 
                     addPost={props.addPost} />

            <ListPosts posts={props.posts} />
        </div>
    )
}
export default Profile;