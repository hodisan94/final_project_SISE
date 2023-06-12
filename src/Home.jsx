import React, { Component } from 'react';
import {useState,useEffect,useRef} from 'react';

import './Home.css';



const Home = () =>{


    return (
        <div className="home"> 
        <br></br>
        <h1>Light pollution</h1>
        <h2>Hello dear friend, this is a website for the Light pollution problem.</h2>
        <h2>What is light pollution you ask?</h2>
        <br></br>
        <h2> Light pollution refers to the excessive or misdirected artificial light that interferes with the natural darkness of the night sky.</h2>
        <h2>It is caused by the overuse, poor design, or inefficient use of outdoor lighting fixtures.</h2>
        <h2>As a result, light pollution not only diminishes our ability to observe and appreciate the beauty of the stars and celestial objects,</h2>
        <h2> but it also has adverse effects on the environment, human health, and wildlife.</h2>
        <br></br><br></br>
        <iframe width="660" height="415" src="https://www.youtube.com/embed/V_A78zDBwYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>

    )
}

export default Home;