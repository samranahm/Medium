import React, { useState } from "react";
import "./LoginSignupModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



import careerLogo from '../media/pictures/logo.png';

function LoginSignupModal({logo}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></button>
        <div className="model-left">
         <img id="left-logo"
         src = {careerLogo} alt="logo" />
         <p id="left-para">Sign up to discover human stories that<br /> deepen your understanding of the world.</p>
        </div>
       <div className="card-container">
       <div className="card">
          <h3 className="hThree">Free</h3>
          <p> <FontAwesomeIcon icon={faCheck} />  Distraction-free reading. No ads.</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Organize your knowledge with lists and highlights.</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Tell your story. Find your audience.</p> 
         <button className="model-btn signup">Sign up for free</button>
        </div>
        <div className="card">
          <h3 className="hThree">Membership</h3>
          <p> <FontAwesomeIcon icon={faCheck}/>  Read member-only stories.</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Support writers you read most</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Earn money for your writing</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Listen to audio narrations</p> 
          <p> <FontAwesomeIcon icon={faCheck}/>  Read offline with the Medium app</p>         
          <button className="model-btn">Try for $%/month</button>
        </div>
       </div>
      </div>
    </div>
  );
}

export default LoginSignupModal;
