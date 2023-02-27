import React from 'react';
import Image from 'next/image';
import IMG from '/public/images/Locker_base.gif'

import styles from './Locker.module.scss';

export default function Locker() {
  return (
    <div className={styles.locker}>
      <Image
        src={IMG}
        alt='gif locker'
        width={300}
        height={300}
      />
    </div>
  );
}
