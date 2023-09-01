import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        @2023 Lamamia. All rights reserved.
      </div>
      <div className={styles.social}>
          <Image className={styles.icon} src='/1.png' width={15} height={15} alt='facbook'/>
          <Image className={styles.icon} src='/2.png' width={15} height={15} alt='instagram'/>
          <Image className={styles.icon} src='/3.png' width={15} height={15} alt='twitter'/>
          <Image className={styles.icon} src='/4.png' width={15} height={15} alt='youtube'/>
      </div>
    </div>
  )
}

export default Footer