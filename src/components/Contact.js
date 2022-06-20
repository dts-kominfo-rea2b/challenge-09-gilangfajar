// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='contact-item'>
            <img src={props.data.photo} alt={props.data.name} className="contact-avatar" />
            <div className='contact-info'>
                <h1 className='contact-name'>{props.data.name}</h1>
                <a href='tel:{props.data.phone}' className='contact-phone'>{props.data.phone}</a>
                <br></br>
                <a href='mailto:{props.data.email}' className='contact-email'>{props.data.email}</a>
            </div>
        </div>
    )
}

export default Contact;