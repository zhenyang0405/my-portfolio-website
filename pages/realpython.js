import React from 'react'
import styles from '../styles/Realpython.module.css'
import Image from 'next/image'


const realpython = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>RealPython</h1>
      <div className={styles.content_container}>
        <p className={styles.year}>2020</p>
        <div className={styles.certifications_2020}>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-06-09_HTTP-Requests-in-Python.png' alt='HTTP Requests in Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-06-14_OOP.png' alt='Object-Oriented Programming' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-06-18_python-super.png' alt='super() in Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-06-26_Inheritance-and-Composition.png' alt='OOP Inheritance and Composition' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-05_Python-decorator.png' alt='Decorator in Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-09_OOP-method-types.png' alt='OOP Method Types' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-09_OOP-string-conversion.png' alt='OOP String Conversion' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-12_Django-migration.png' alt='Django Migration' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-12_Location-based-web-app.png' alt='Django Location Based Web App' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-07-26_Json-data.png' alt='JSON in Python' width={550} height={320} />
          </div>
          <div className={styles.image}>
            <Image src='/certifications/realpython/2020-08-15_Thinking-recursively.png' alt='Recursive Thinking in Python' width={550} height={320} />
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

export default realpython