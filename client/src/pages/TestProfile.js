import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'


const TestProfile = () => {
    const [isOpen, setIsOpen] = useState(false)
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
            

            
            <div className='aboutForm'>
            <div className='aboutItems'>
            <div><h2>Name</h2>
            <h3>Skills</h3>
            <h3>Location</h3>
            <h3>Contact</h3> 
            <h3>Rates</h3></div>
            </div>
            <hr></hr>
            <img classname='profilePic' src='https://i.pinimg.com/736x/93/45/89/934589f3aa2f266b260de8bfeb3ae1ab.jpg'/>
            <p> lorem15lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15lorem15lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15lorem15lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15lorem15lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15 lorem15</p>
            </div>
            

            <div className='profilePreview'>
                <div className='previewForm'>
                    <h2 className='memo'>
                        I will ...
                    </h2>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'/>
                </div>
            </div>

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
                <div className='projectItem'>
                    <h3>project card 6</h3>
                    <hr></hr>
                    <img src='https://miro.medium.com/max/1000/1*wLubnBK3-31zDS0ppyU6wQ.png'/>
                    <p>description 6</p>
                </div>
                
                
            <button onClick={() => setIsOpen(true)} className='projectItem'>
                <h3>Add Project</h3>
                <hr></hr>
                <img src='https://cdn-icons-png.flaticon.com/512/32/32339.png'/>
            </button>
        </div>
            <Modal open = {isOpen} onClose={() => setIsOpen(false)}>

            </Modal>
        </section>

        <section className='settings' id='settings'>

        </section>
    </div>

</body>

)
}

    


export default TestProfile