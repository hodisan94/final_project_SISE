import React, { Component } from 'react';
import {useState,useEffect,useRef} from 'react';

import './Home.css';



const Home = () =>{


    return (
        <div className="home"> 
        <br></br>
        <h2>זיהום אור הוא מונח המתאר תופעה של תאורה מלאכותית של שמיי הלילה</h2>
        <h2>ולו השפעות שליליות רבות ביניהן: בריאות, פגיעה בשמורות טבע, כלכלה, אנרגיה וכמובן צפיה בכוכבים ושמי הלילה</h2>
        <h2>.בכל הנוגע לזיהום אור בישראל ישנו פער גדול משאר העולם ביכולת להתמודד עם התופעה</h2>
        <h2>.להעלות מודעות ולקדם רגולציה בנושא,פער שנובע בעיקר ממחסור בנתונים שמקשה על היכולת להתמודד עם התופעה</h2>
        <br></br>
        <h2>.מערכת למדידת זיהום אור היא קבוצת כלים המתממשקים יחדיו בכדי לתרום למאמץ להתמודדות עם התופעה על ידי הנגשה של תהליכי איסוף הנתונים והצגתם</h2>
        <br></br>
        <h2>.המערכת כוללת אפליקציה ייעודית לטלפונים חכמים המאפשרת למשתמשים לדווח על זיהום אור מהמיקום הגיאוגרפי בו הם נמצאים על ידי צילום השמיים</h2>
        <h2>התמונה נשלחת לשרת שמחשב את ערך זיהום האור באמצעות פונקציה ייעודית</h2>
        <h2>.המערכת מבצעת ולידציה לכל דיווח שנשלח והדיווחים הרלוונטיים נשמרים בבסיס הנתונים של המערכת</h2>
        <br></br>
        <h2>"הורידו עכשיו את האפליקציה למדידת זיהום אור תחת השם "מודד זיהום אור</h2>
        <h2><a href='https://play.google.com/store/apps/details?id=com.light_pollution'>Google Play Store-ב</a></h2>
        <h2>.ותוכלו לראות את הדיווחים שלכם ושל משתמשים אחרים במפה של אתר זה</h2>
{/* 

        <h1>Light pollution</h1>
        <h2>Hello dear friend, this is a website for the Light pollution problem.</h2>
        <h2>What is light pollution you ask?</h2>
        <br></br>
        <h2> Light pollution refers to the excessive or misdirected artificial light that interferes with the natural darkness of the night sky.</h2>
        <h2>It is caused by the overuse, poor design, or inefficient use of outdoor lighting fixtures.</h2>
        <h2>As a result, light pollution not only diminishes our ability to observe and appreciate the beauty of the stars and celestial objects,</h2>
        <h2> but it also has adverse effects on the environment, human health, and wildlife.</h2>
        <br></br><br></br> */}
        <iframe width="660" height="415" src="https://www.youtube.com/embed/V_A78zDBwYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>

    )
}

export default Home;