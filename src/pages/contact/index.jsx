import React, { useState, useRef } from 'react'
import Image from 'next/image';
import Script from 'next/script';
/* import emailjs from '@emailjs/browser'; */
import {motion} from 'framer-motion'
import { FcCheckmark } from 'react-icons/fc'
import Modal from '../../components/modal/Modal';
import IMG from '/public/images/tony.png'

// styles
import styles from './Contact.module.scss'

const ModalContent = () => {
  return (
    <div style={{width: '80%', margin: '3rem auto', display: 'grid', placeContent: 'center'}}>
      <h2 style={{color: 'white'}}>Thanks for your mail!</h2>
      <p style={{ color: 'white' }}>I&apos;ll get back to you as soon as possible :D</p>
      <Image src={IMG} alt="" style={{
        position: 'absolute',
        left: '0',
        top: '0',
        opacity: '0.5',
        zIndex: '-1',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} />
    </div>
  );
};

const Contact = () => {
    /* const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' }) */
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const form = useRef();
  
/* 
    const onChangeHandler = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, [e.target.name]: value})
      console.log(e.target.value)
    } */
  

    const handleSubmit = (e) => {
      /*   e.preventDefault()
      let isValid = e.target.checkValidity()
      console.log(isValid)
           
        emailjs.sendForm(process.env.REACT_APP_SENDER_ID, process.env.REACT_APP_TEMP_ID, form.current, process.env.REACT_APP_KEY)
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      }); */
  }
  
   /* console.log(`name: ${formData.name} \n
        email: ${formData.email}  \n
        subject: ${formData.subject} \n
        message: ${formData.message}`) 
        
    */

  return (
    <div className={styles.contact}>
      <Script src="https://smtpjs.com/v3/smtp.js" />
      <motion.h2
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeOut'}}
      >Bookings</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.6, ease: 'easeOut'}}
      >&</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.8, ease: 'easeOut'}}
      >Contact</motion.h2>
      <motion.form className={styles.contact_form} ref={form} onSubmit={handleSubmit}
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 0.6, delay: 1, ease: 'easeOut'}}
      >
        <label >Name</label>
        <div className={styles.input_field}>
          <input
            type="text"
            name="name"
            /* value={form.name || ''}  */
            required
            minLength={3}
            maxLength={15} />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Email</label>
        <div className={styles.input_field}>
          <input
            type="email"
            name="email" /* value={form.email || ''} onChange={onChangeHandler} */
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Subject</label>
        <div className={styles.input_field}>
          <input type="text" name="subject"
          /* value={form.subject || ''} 
          onChange={onChangeHandler} */
            minLength={5}
            maxLength={30}
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <label >Message</label>
        <div className={styles.input_field}>
          <textarea type="textarea" name="message" /* value={form.message || ''} onChange={onChangeHandler} */
            minLength={20}
            maxLength={200}
            required />
          <span className={styles.check_icon}><FcCheckmark /></span>
        </div>
        <input className={styles.submit_btn} type="submit" name="submit" value="Submit"
        onClick={() => (modalOpen ? close() : open())}
        />
      </motion.form>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<ModalContent />}
        ></Modal>
        )}
    </div>
  )
}

export default Contact