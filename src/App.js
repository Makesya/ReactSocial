import React from 'react';
import './App.css';
import Header from './customApps/Header';
import Navigation from './customApps/Navigation';
import CurrentImg from './customApps/CurrentImg';
import Profile from './customApps/Profile';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="content">
                <CurrentImg />
                <Profile />
            </div>
        </div>

    )
}

export default App;
