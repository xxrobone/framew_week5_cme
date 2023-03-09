import React from 'react'

import styles from './Video.module.scss'
const Video = ({children}) => {
  return (
      <div className={styles.video_wrapper}>
          <div className={styles.video_inner}>
              {children}
          </div>
          
    </div>
  )
}

export default Video