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

        <div className='menu'>
            <ul>
                <li><a href='#'>Settings</a></li>
            </ul>
        </div>

        <section className='about' id='about'>
            
            <img classname='profilePic' src='https://i.pinimg.com/736x/93/45/89/934589f3aa2f266b260de8bfeb3ae1ab.jpg'/>
            <div className='menu'>
                <ul>
                    <li><a href='#'>Settings</a></li>
                </ul>
            </div>
            <h2>Name</h2>
            <h3>Skills</h3>
            <h3>Location</h3>
            <h3>Contact</h3>
            <h3>Rates</h3>
            
            <p>lorem15lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 </p>
        </section>

        <section className='projects' id='projects'>
            <div className='projectsContainer'>
                <div className='projectItem'>
                    <h3>project card 1</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 1</p>
                </div>
                <div className='projectItem'>
                    <h3>project card 2</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 2</p>
                </div>
                <div className='projectItem'>
                    <h3>project card 3</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 3</p>
                </div>
                <div className='projectItem'>
                    <h3>project card 4</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 4</p>
                </div>
                <div className='projectItem'>
                    <h3>project card 5</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 5</p>
                </div>
                <div className='projectItem'>
                    <h3>project card 6</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 6</p>
                </div>
            </div>
        </section>
    </div>

</body>
)
}

    


export default TestProfile