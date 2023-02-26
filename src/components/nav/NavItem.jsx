import React from 'react';
import Link from 'next/link';
import { motion as mt } from 'framer-motion';

// styles
import styles from './NavItem.module.scss'

export default function NavItem({title, path, id, i}) {
  return (
    <mt.li className={styles.nav_item} key={id}
    initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
    >
          <Link className={styles.nav_link} href={path}>{title}</Link>
    </mt.li>
  )
}
