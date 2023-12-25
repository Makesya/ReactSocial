import css from './NewPost.module.css'
import React, { useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
const NewPost = (props) => {
    let PostElement = React.createRef();
    
    
    
    const addPost = () => {
        let text = PostElement.current.value;
        props.addPost(text);
        props.updatePostText('');
    }

    return (
        <div className={css.container}>
            <hr />
            <p className={css.new_post}>New post</p>
            <TextareaAutosize
                style={{ boxSizing: 'border-box' }}
                minRows={3}
                maxRows={6}
                placeholder="What would you like to talk about?"
                ref={PostElement}
            />
            <div className={css.position_btn}>
                <input onClick={addPost} className={css.btn} type="button" value="Post" />
            </div>
            <hr />
        </div>
    )
}
export default NewPost;