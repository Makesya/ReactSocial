import React from 'react';
import css from './App.module.css';
import Header from './customApps/Header/Header';
import Navigation from './customApps/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Messages from './customApps/Dialogs/Messages';
import Profile from './customApps/Profile/Profile';
import News from './customApps/News/News';
import { addPost } from './redux/state';
import { updatePostText } from './redux/state';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={css.wrapper} >
                <Header />
                <Navigation />
                <div className={css.content} >
                    <Routes>
                        <Route Component={() => (<Messages msgList={props.state.dialogsPage.msgList} />)} path='/messages' />
                        <Route Component={() => (<Profile addPost={addPost} updatePostText={updatePostText} newPostText={props.state.profilePage.newPostText} posts={props.state.profilePage.posts} />)} path='/profile' />
                        <Route Component={() => (<Profile addPost={addPost} updatePostText={updatePostText} newPostText={props.state.profilePage.newPostText} posts={props.state.profilePage.posts} />)} path='/' />
                        <Route Component={() => (<News />)} path='/news' />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;