import React from 'react'
import {motion} from 'framer-motion'

// styles
import styles from './Header.module.scss'

export default function Header(props) {
  return (
    
    <header className={styles.header}>
      {props.children}
      <motion.hr className={styles.border_bottom}
      initial={{width: '0%'}}
      animate={{delay: 1.2,
        width: '100%',
          ease: 'easeInOut'
        }}
        transition={{duration: 1.6, delay: 0.3, ease: 'easeInOut'}}
      />
    </header>

  )
}
