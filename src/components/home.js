import React from 'react';
import '../App.css';
import sude from '../assets/1.png';
import left_corner from '../assets/2.png';
import right_corner from '../assets/3.png';
import left_bottom from '../assets/4.png';
import "../styles/home.css"
const Home = () => {
    const rotateStyle = {
        animation: "rotate360 5s linear infinite"
    };

    return (
        <div className="home">
            <img src={left_corner} className="left" alt="logo" style={rotateStyle} />
            <img src={right_corner} className="right" alt="logo" style={rotateStyle} />

            <div className="main-content">
                <h2 className="iam">I am</h2>
                <img src={sude} className="home-logo" alt="logo" />
            </div>
            
            <img src={left_bottom} className="bottom" alt="logo" style={rotateStyle} />
        </div>
    );
};

export default Home;
