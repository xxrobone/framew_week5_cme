import React from 'react'
import {motion} from 'framer-motion'

// styles
import styles from './Footer.module.scss'

export default function Footer(props) {
  return (
    
    <footer className={styles.footer}>
      {props.children}
      <motion.hr className={styles.footer_bottom}
      initial={{width: '0%'}}
      animate={{delay: 1.2,
        width: '100%',
          ease: 'easeInOut'
        }}
        transition={{duration: 1.6, delay: 0.3, ease: 'easeInOut'}}
      />
    </footer>

  )
}
