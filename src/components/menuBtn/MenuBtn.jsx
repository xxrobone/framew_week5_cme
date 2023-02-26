import React,{ useState } from 'react'

// styles
import styles from './MenuBtn.module.scss'

const MenuBtn = ({active, setActive}) => {
   /*  const [active, setActive] = useState(false) */
    
    const onClickHandler = () => {
        setActive(!active)
        console.log(active)
    }

  return (
    <div className={styles.hamburger_wrapper} onClick={(e) => onClickHandler()}>
          <div className={`${styles.hamburger} ${active ? styles.active : ''}`} id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  )
}

export default MenuBtn