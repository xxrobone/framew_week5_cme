import MenuBtn from '../menuBtn/MenuBtn'

// styles
import styles from './Nav.module.scss'

export default function Nav({ active, setActive, children }) {

  
  return (
    <nav className={styles.nav}>
    <ul className={`${styles.menu} ${active ? styles.open : ''}`}>
  {children}              
    </ul>
    <MenuBtn active={active} setActive={setActive}/>
</nav>
);
}
  