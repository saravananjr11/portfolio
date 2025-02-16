import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import emailJs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import ContactIMg from '../portfolioimges/contact.png';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email format';
    if (!message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const allert = () => {
    Swal.fire({
      title: 'THANK YOU! I WILL TEXT YOU LATER',
      icon: 'success',
      draggable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceId = 'service_y61oh0h';
    const templateId = 'template_x4e60fw';
    const publicKey = 'O3GoAswQiBPCvwqd2';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Saravana Kumaran',
      message,
    };

    emailJs.send(serviceId, templateId, templateParams, publicKey).then(
      (res) => {
        console.log('SUCCESS!', res);
        setName('');
        setEmail('');
        setMessage('');
        if (res.status === 200) {
          allert();
        } else {
          alert('Error');
        }
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div className='total-cont'>
        <h1>CONTACT ME</h1>
      <motion.div className='contact' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='content'>
          <div className='words'>
            <div className='para1 paras'>
              <p>I'd love if you reached out to me. Even if it's just to say "Hey!"</p>
              <p>Don't hesitate, drop me a line and I'll get back to you ASAP!</p>
            </div>
            <div className='para2 paras'>
              <p>For gig and advertising opportunities, begin your subject with <strong>"GIG"</strong></p>
            </div>
            <div className='mailId paras'>
              <div><IoIosMail /></div>
              <div className='mail'>
                <p>saravanapes@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <div className='inputs'>
                <label htmlFor='name'>Name</label>
                <input type='text' value={name} id='name' onChange={(e) => setName(e.target.value)} />
                {errors.name && <p className='error'>{errors.name}</p>}
              </div>
              <div className='inputs'>
                <label htmlFor='Email'>Email</label>
                <input type='email' value={email} id='Email' onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className='error'>{errors.email}</p>}
              </div>
              <div className='inputs textarea'>
                <label htmlFor='text'>Message</label>
                <textarea name='text' id='text' value={message} onChange={(e) => setMessage(e.target.value)} />
                {errors.message && <p className='error'>{errors.message}</p>}
              </div>
              <div className='btnd'>
                <motion.button type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Submit</motion.button>
              </div>
            </form>
          </div>
        </div>
        <motion.div className='images' animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <img src={ContactIMg} alt='Contact' className='floating-img' />
        </motion.div>
      </motion.div>
      <h1 className='thankyou-text'>THANK YOU FOR VISITING MY PAGE</h1>
    </div>
  );
}

export default Contact;
