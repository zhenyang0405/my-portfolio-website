import React from 'react'
import styles from '../styles/Algoexpert.module.css'
import Image from 'next/image'

const algoexpert = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>AlgoExpert</h1>
      <div className={styles.content_container}>
        <p className={styles.year}>2021</p>
        <div className={styles.certifications_2021}>
          <div className={styles.image}>
            <Image src='/certifications/algoexpert/2021-11-13_algoexpert.png' alt='Solve 100 AlgoExpert Questions' width={550} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default algoexpert