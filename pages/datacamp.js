import React from 'react'
import styles from '../styles/Datacamp.module.css'
import Image from 'next/image';

const datacamp = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Datacamp</h1>
      <div className={styles.content_container}>
        <p className={styles.year}>2018</p>
        <div className={styles.certifications_2018}>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2018-12-13_Intro-to-Python.png' alt='Introduction to Python' width={550} height={320} />
          </div>
        </div>
        <p className={styles.year}>2020</p>
        <div className={styles.certifications_2020}>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2020-11-07_Python-Intermediate.png' alt='Intermediate to Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2020-11-07_Python-Data-Science-Toolbox-(Part1).png' alt='Python Data Science ToolBox 1' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2020-11-07_Python-Data-Science-Toolbox-(Part2).png' alt='Python Data Science ToolBox 2' width={550} height={320} />
          </div>
        </div>
        <p className={styles.year}>2021</p>
        <div className={styles.certifications_2021}>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2021-06-10_Writing-Efficient-Python.png' alt='Writing Efficient Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2021-06-11_Writing-Function-in-Python.png' alt='Writing Function in Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2021-06-15_OOP.png' alt='Object-Oriented Programming' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/datacamp/2021-08-13_Statistical-Thinking-in-Python.png' alt='Statistical Thinking in Python' width={550} height={320} />
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default datacamp