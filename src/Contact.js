import React, { Component } from 'react';
import './App.css';
import contact from './dentistcontact.png';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact Us</h1>

       <p>
         Call, email or drop by any time. We're open Monday through Friday
         from 9AM until 5PM. If you call during our off hours and leave a
         message then we'll get back to you.
       </p>
        <img className='contact-Image' src={contact}></img>
       <p>
         frontdesk@dentistoffice.com
       </p>

       <p>
         1 (800) MY-TEETH <br/>
         1 (800) 698-3384
       </p>

       <p>
         123 Main Street <br/>
         Dental Town, USA 99555
       </p>
      </div>
    );
  }
}

export default Contact;
