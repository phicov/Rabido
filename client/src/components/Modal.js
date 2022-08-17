import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,
    borderRadius: '20px',
    textAlign: 'center'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7',
    zIndex: 1000
}

export default function Modal({ open, children, onClose, NewProject }) {
    if (!open) return null

  return (
    <>
    <div style={OVERLAY_STYLES} onClick={(onClose)}></div>
    <div style={MODAL_STYLES}>
                    <h3>New Project</h3>
                    <hr></hr>
                    <div className='addContainer'>
                        <input className='projectTitle addItem' type='text' placeholder='Project Title' name='projectTitle'></input>
                        <input classname='projectImage addItem' type='file' placeholder='Project Image' name='projectImage'></input>
                        <input className='description addItem' type='text' placeholder='Description' name='projectDescription'></input>
                        <button className='submitButton addItem' onClick={(NewProject)}>Submit</button>
                    </div>
                <div className='overlay' id='overlay'></div>
        {children}
    </div>
    </>
  )
}
