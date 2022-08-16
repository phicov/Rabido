import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const TestProfile = () => {
return (
    <body className='profileBody'>

    <div className='profileContainer'>
        <nav className='profileNav'>
            <ul> 
                <li><a href='#about'>About</a></li> 
                <li><a href='#projects'>Projects</a></li>
            </ul>
        </nav>

        <section className='about' id='about'>
            
            <img classname='profilePic' src='https://i.pinimg.com/736x/93/45/89/934589f3aa2f266b260de8bfeb3ae1ab.jpg'/>
            <h2>Name</h2>
            <h3>Skills</h3>
            <h3>Location</h3>
            <h3>Contact</h3>
            <h3>Rates</h3>
            
            <p>About me</p>
        </section>

        <section className='projects' id='projects'>
            <h1>Projects</h1>
            <div className='projectItem'>project1</div>
        </section>
    </div>

</body>
)
}

    


export default TestProfile