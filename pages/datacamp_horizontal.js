import React from 'react'
import styles from '../styles/Datacamp_horizontal.module.css'

const datacamp_horizontal = () => {
  return (
    <div className={styles.main_container}>
        <div className={styles.outer_horizontal__container}>
            <div className={styles.inner_horizontal__container}>
                <h1>Horizontal</h1>
            </div>
        </div>
    </div>
  )
}

export default datacamp_horizontal