import { motion } from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';

// styles
import styles from './Modal.module.scss';

const dropIn = {
  hidden: {
    x: '0',
    scale: 0,
    opacity: 0,
  },
  visible: {
    x: '0',
    scale: 1,
    opacity: '1',
    transition: {
      duration: 1,
      ease: [0.17, 0.67, 0.83, 0.67],
      type: 'spring',
      damping: 50,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: 1000,
    scale: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

const Modal = ({ handleClose, content }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal} ${styles.glass}`}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <button onClick={handleClose} className={styles.close_btn}>
          CLOSE
        </button>
        {content}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
