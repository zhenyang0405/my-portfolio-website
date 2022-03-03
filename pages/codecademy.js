import React from 'react'
import styles from '../styles/Codecademy.module.css'
import Image from 'next/image'

const codecademy = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Codecademy</h1>
      <div className={styles.content_container}>
        <p className={styles.year}>2020</p>
        <div className={styles.certifications_2020}>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2020-09-20_Building-Interactive-Website.png' alt='Building Interactive Website' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2020-09-20_command-line.png' alt='Linux Command Line' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2020-09-22_git.png' alt='Git' width={550} height={400} />
          </div>
        </div>
        <p className={styles.year}>2021</p>
        <div className={styles.certifications_2021}>
          <div className={styles.image}>
          <Image src='/certifications/codecademy/2021-01-09_Learn-React.png' alt='React' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-02-15_golang.png' alt='Golang' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-02-26_python-recursion.png' alt='Python Recursion' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-06-27_CSharp.png' alt='C#' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-07-08_Analyze-Data-SQL.png' alt='Analyze Data using SQL' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-07-10_Create-Advanced-Web-App-React-Redex.png' alt='React Redux' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-08-07_bash-scripting.png' alt='Bash Scripting' width={550} height={400} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/codecademy/2021-11-08_Design-Databases-Postgres.png' alt='Postgres' width={550} height={400} />
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

export default codecademy