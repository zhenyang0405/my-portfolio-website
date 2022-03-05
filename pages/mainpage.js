import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled from 'styled-components'

const ButtonLight = styled.button`
  background: midnightblue;
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  border: 2px solid midnightblue;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: aliceblue;
    color: midnightblue;
  }
`;

const ButtonDark = styled.button`
  background: #64ffda;
  color: #222;
  border-radius: 3px;
  padding: 0.5em 1em;
  border: 2px solid #64ffda;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: #0A1929;
    color: #64ffda;
  }
`;

const Mainpage = () => {

  const [dark, setDark] = useState(false);
  const [toggleTabIndex, setToggleTabIndex] = useState(1);

  const toggleTab = (idx) => {
    setToggleTabIndex(idx);
  }

  const toggleTheme = (bool) => {
    setDark(bool);
    const htmlTag = document.getElementsByTagName("html")[0]
    if (htmlTag.hasAttribute("data-theme")) {
      htmlTag.removeAttribute("data-theme")
      return
    }
    htmlTag.setAttribute("data-theme", "dark")  
  }

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <main className={styles.main} id='home'>
        {/* Intro Section */}
        <div className={styles.intro__container}>
        <div className={styles.top_bar}>
            <div className={styles.top_left}>
                <div className={styles.main_symbol} data-aos='fade-down' data-aos-delay='100' >
                {(dark)
                    ? <a href='#home'><Image src='/logo/symbol-green.png' alt='symbol' width={30} height={30} /></a>
                    : <a href='#home'><Image src='/logo/symbol-black.png' alt='symbol' width={30} height={30} /></a>
                }
                </div>
                <div className={styles.main_menu_container}>
                  <p className={styles.menu_items} data-aos='fade-down' data-aos-delay='300' >01 &nbsp;&nbsp;<span className={styles.menu_option}><a href='#project'>Project</a></span></p>
                  <p className={styles.menu_items} data-aos='fade-down' data-aos-delay='500' >02 &nbsp;&nbsp;<span className={styles.menu_option}><a href='#learning' >Learning</a></span></p>
                  <p className={styles.menu_items} data-aos='fade-down' data-aos-delay='700' >03 &nbsp;&nbsp;<span className={styles.menu_option}><a href='#about me'>About Me</a></span></p>
                </div>
            </div>
            <div className={styles.top_right}>
                <div className={styles.menu_container}>
                <div className={styles.theme_option} data-aos='fade-down' data-aos-delay='900'>
                    {(dark) 
                    ? <Image src='/logo/moon-green.png' alt='Moon' width={30} height={30} onClick={() => toggleTheme(false)} />
                    : <Image src='/icons8-sun-90.png' alt='Sun' width={30} height={30} onClick={() => toggleTheme(true)} />
                    }
                </div>
                
                </div>
            </div>
            </div>
        <div className={styles.my__container}>
            <div className={styles.my_name__container}>
            <div className={styles.my_name__left}>
              <div className={styles.my_intro_container_one}>
                <p className={styles.my_intro} data-aos='fade-right' data-aos-delay='1100' >Hi, my name is <span className={styles.name}>Zhen Yang</span>.</p>
              </div>
              <div className={styles.my_intro_container_two}>
                <p className={styles.my_intro} data-aos='fade-right' data-aos-delay='1100' >Hi, my name is</p>
                <p className={styles.my_intro} data-aos='fade-right' data-aos-delay='1300' ><span className={styles.name}>Zhen Yang</span>.</p>
              </div>
              
              {/* <p className={styles.my_intro}>Hi, my</p> */}
              {/* <p className={styles.my_intro}>Hi, my name is <span className={styles.name}>Zhen Yang</span>.</p> */}
              <div className={styles.short_intro_container_one}>
                <p className={styles.my_intro_short} data-aos='fade-right' data-aos-delay='1500' >I’m a Self-Taught Programmer specialising in Python and Javascript. Always looking for ways to automate repetitive task, explore new technologies and build interactive program. <span className={styles.job}>Currently looking for new opportunity</span>.</p>
              </div>
              <div className={styles.short_intro_container_two}>
                <p className={styles.my_intro_short} data-aos='fade-right' data-aos-delay='1500' >I’m a Self-Taught Programmer specialising in Python and Javascript. Always looking for ways to automate repetitive task, explore new technologies and build interactive program. <span className={styles.job}>Currently looking for new opportunity</span>.</p>
              </div>
              
              {/* Screen size > 700 */}
              <div data-aos='fade-right' data-aos-delay='1700' className={styles.resume_button_container_one} >
                {(dark)
                    ? <ButtonDark className={styles.resume_button}>Resume</ButtonDark>
                    : <ButtonLight className={styles.resume_button}>Resume</ButtonLight>
                }
              </div>
              {/* Screen size <= 700 */}
              <div data-aos='fade-right' className={styles.resume_button_container_two} data-aos-delay='1700' >
                {(dark)
                    ? <ButtonDark className={styles.resume_button}>Resume</ButtonDark>
                    : <ButtonLight className={styles.resume_button}>Resume</ButtonLight>
                }
              </div>
            </div>
            </div>
            <div className={styles.my_photo__container} data-aos='fade-left' data-aos-delay='1900'>
              <Image src='/zhenyang.png' alt='Zhen Yang' width={520} height={700} layout='responsive' />
            </div>
        </div>
        </div>
        


        {/* Technologies Section */}
        <div className={styles.technologies_container} data-aos='fade-up'>
          <p className={styles.tech_text}>Technologies that I worked with</p>
          <div className={styles.technologies_bar}>
            <div className={styles.tech_bar_img}>
              <Image src='/logo/python.png' alt='Python' width={80} height={80}  />
            </div>
            <div className={styles.tech_bar_img}>
              <Image src='/logo/javascript.png' alt='Javascript' width={80} height={80} />
            </div>
            {/* <div className={styles.tech_bar_img_medium}>
              {(dark)
                ? <Image src='/logo/nodejs-white.png' alt='Node js' width={130} height={80} />
                : <Image src='/logo/nodejs.png' alt='Node js' width={130} height={80} />
              }
            </div> */}
            <div className={styles.tech_bar_img}>
              <Image src='/logo/react.png' alt='React' width={80} height={80} />
            </div>
            <div className={styles.tech_bar_img}>
              <Image src='/logo/git.png' alt='Git' width={80} height={80} />
            </div>
            <div className={styles.tech_bar_img_long}>
              {(dark)
                ? <Image src='/logo/google-cloud-white.png' alt='Google Cloud' width={280} height={80} />
                : <Image src='/logo/google-cloud.png' alt='Google Cloud' width={300} height={80} />
              }
            </div>
            <div className={styles.tech_bar_img_long}>
              <Image src='/logo/docker-blue.png' alt='Docker' width={260} height={70} />
            </div>
          </div>
        </div>



        {/* Project Section */}
        <div className={styles.project__container} id='project' >
          <p className={styles.project_header} data-aos='fade-up'>Something that I&apos;ve build</p>
          <div className={styles.features_project__container}>
              <div className={styles.project}  data-aos='fade-up'>
              <Image src='/spotify-web-player.png' alt='Spotify Web Player' width={1000} height={650} />
              <div className={styles.project_text__container}>
                  <p className={styles.project_title}>Spotify Web Player</p>
                  <div className={styles.project_title__container}>
                  <p className={styles.project_text}>
                      A web-based music player that you can listen to music on any devices. Play your favourite music from your recently played history. Search new song, album, artist, and playlist. View your top artists and tracks, and listen music from your saved playlists.
                  </p>
                  </div>
                  <p className={styles.project_tech_list}>
                  <span className={styles.tech}><a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://reactrouter.com/' target='_blank' rel='noopener noreferrer'>React Router</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://developer.spotify.com/' target='_blank' rel='noopener noreferrer'>Spotify API</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://expressjs.com/' target='_blank' rel='noopener noreferrer'>Express</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://axios-http.com/' target='_blank' rel='noopener noreferrer'>Axios</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://www.heroku.com/' target='_blank' rel='noopener noreferrer'>Heroku</a></span>
                  </p>
                  <p className={styles.extra_logo_container}>
                  {(dark)
                      ? <a href='https://github.com/zhenyang0405/Spotify-Web-Player' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo_white}></div></a>
                      : <a href='https://github.com/zhenyang0405/Spotify-Web-Player' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo}></div></a>
                  }
                  <a href='https://spotify-web-player-my.herokuapp.com/' target='_blank' rel='noopener noreferrer'><div className={styles.external_logo}></div></a>
                  </p>
              </div>
              </div>
              <div className={styles.project} data-aos='fade-up'>
              <Image src='/moment-web-scraping.png' alt='Moment Web Scraping' width={1000} height={650} />
              <div className={styles.project_text__container}>
                  {/* <p className={styles.features}>Featured Project</p> */}
                  <p className={styles.project_title}>Web Scraping</p>
                  <div className={styles.project_title__container}>
                  <p className={styles.project_text}>
                      Automating Web Scraping using Cloud Run. A program that will get the price of camera every single day and notify user through Telegram. User is allowed to ask questions and able to receive automated response directly from Telegram’s bot, which is handled using Cloud Functions.
                  </p>
                  </div>
                  <p className={styles.project_tech_list}>
                  <span className={styles.tech}><a href='https://www.python.org/' target='_blank' rel='noopener noreferrer'>Python</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://www.selenium.dev/' target='_blank' rel='noopener noreferrer'>Selenium</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://docs.python-requests.org/en/latest/' target='_blank' rel='noopener noreferrer'>Requests</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://core.telegram.org/' target='_blank' rel='noopener noreferrer'>Telegram API</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://cloud.google.com/run' target='_blank' rel='noopener noreferrer'>Cloud Run</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://cloud.google.com/functions' target='_blank' rel='noopener noreferrer'>Cloud Function</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={styles.extra_logo_container}>
                  {(dark)
                      ? <a href='https://github.com/zhenyang0405/Web-Scraping-Project' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo_white}></div></a>
                      : <a href='https://github.com/zhenyang0405/Web-Scraping-Project' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo}></div></a>
                  }
                  </p>
              </div>
              
              </div>
              <div className={styles.project} data-aos='fade-up'>
              <Image src='/sudoku.png' alt='Sudoku Game' width={1000} height={650} />
              <div className={styles.project_text__container}>
                  {/* <p className={styles.features}>Featured Project</p> */}
                  <p className={styles.project_title}>Sudoku Game & Solver</p>
                  <div className={styles.project_title__container}>
                  
                  <p className={styles.project_text}>
                      A simple Sudoku game and solver that was build using Python. User can play the game, or the Sudoku can solve by itself using backtracking algorithm. An application to demonstrate how recursive work in programming.
                  </p>
                  </div>
                  <p className={styles.project_tech_list}>
                  <span className={styles.tech}><a href='https://www.python.org/' target='_blank' rel='noopener noreferrer'>Python</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://github.com/pygame/pygame' target='_blank' rel='noopener noreferrer'>Pygame</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.tech}><a href='https://pipenv.pypa.io/en/latest/' target='_blank' rel='noopener noreferrer'>Pipenv</a></span>&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={styles.extra_logo_container}>
                  {(dark)
                      ? <a href='https://github.com/zhenyang0405/Sudoku-Solver' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo_white}></div></a>
                      : <a href='https://github.com/zhenyang0405/Sudoku-Solver' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo}></div></a>
                  }
                  </p>
              </div>
              </div>
          </div>
        </div>



        {/* Journey Section */}
        <div className={styles.journey__container} id='learning'>
        <p className={styles.journey_header} data-aos='fade-up'>Where Do I Got My Skill</p>

        <div className={styles.tabs_container} data-aos='fade-up'>
            <div className={styles.tabs_option}>
            <button className={toggleTabIndex === 1 ? `${styles.btn} ${styles.active_btn}` : `${styles.btn}`} onClick={() => toggleTab(1)}>DataCamp</button>
            <button className={toggleTabIndex === 2 ? `${styles.btn} ${styles.active_btn}` : `${styles.btn}`} onClick={() => toggleTab(2)}>RealPython</button>
            <button className={toggleTabIndex === 3 ? `${styles.btn} ${styles.active_btn}` : `${styles.btn}`} onClick={() => toggleTab(3)}>Codecademy</button>
            <button className={toggleTabIndex === 4 ? `${styles.btn} ${styles.active_btn}` : `${styles.btn}`} onClick={() => toggleTab(4)}>AlgoExpert</button>
            </div>
            <div className={styles.content_tabs}>
            <div className={toggleTabIndex === 1 ? `${styles.content} ${styles.active_content}` : `${styles.content}`}>
                <Image src='/logo/datacamp.png' alt='DataCamp' width={600} height={100} quality={100} />
                <p className={styles.content_description}>DataCamp is the leading online platform designed to teach modern professionals the data skills they need at their own pace. From non-coding essentials to data science and machine learning, all taught by leading experts in the field. DataCamp teaches companies and individuals the skills they need to work with data in the real world.</p>
                <p className={styles.content_title}>Skill Learned From <span className={styles.from_platform}><a href='https://www.datacamp.com/' target='_blank' rel='noopener noreferrer'>DataCamp</a></span></p>
                <ul className={styles.content_list}>
                <li>Python</li>
                <li>Data Analysis</li>
                <li>Statistical Thinking</li>
                <li>Visualization</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                </ul>
            </div>
            <div className={toggleTabIndex === 2 ? `${styles.content} ${styles.active_content}` : `${styles.content}`}>
                <Image src='/logo/realpython-banner.png' alt='RealPython' width={600} height={100} quality={100} />
                <p className={styles.content_description}>RealPython is an online platform about Python Training & Expert Community. It consists of tutorials, books, and video courses. It was created, curated, and vetted by a community of expert Pythonistas.</p>
                <p className={styles.content_title}>Skill Learned From <span className={styles.from_platform}><a href='https://realpython.com/' target='_blank' rel='noopener noreferrer'>RealPython</a></span></p>
                <ul className={styles.content_list}>
                <li>HTTP Requests</li>
                <li>Flask</li>
                <li>Object-Oriented Programming</li>
                <li>OOP Inheritance and Composition</li>
                <li>Decorators</li>
                <li>Django</li>
                </ul>
            </div>
            <div className={toggleTabIndex === 3 ? `${styles.content} ${styles.active_content}` : `${styles.content}`}>
                <Image src='/logo/codecademy-banner.png' alt='Codecademy' width={600} height={100} quality={100} />
                <p className={styles.content_description}>Codecademy is an American online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, Swift, and Sass, as well as markup languages HTML and CSS. The site also offers a paid &quotPro&quot option that gives users access to personalized learning plans, quizzes, and realistic projects.</p>
                <p className={styles.content_title}>Skill Learned From <span className={styles.from_platform}><a href='https://www.codecademy.com/' target='_blank' rel='noopener noreferrer'>Codecademy</a></span></p>
                <ul className={styles.content_list}>
                <li>SQL</li>
                <li>React</li>
                <li>Linux</li>
                <li>Git</li>
                <li>PostgreSQL</li>
                <li>Javascript</li>
                </ul>
            </div>
            <div className={toggleTabIndex === 4 ? `${styles.content} ${styles.active_content}` : `${styles.content}`}>
                <Image src='/logo/algoexpert-banner.png' alt='AlgoExpert' width={600} height={100} quality={100} />
                <p className={styles.content_description}>AlgoExpert is an online platform that help Software Engineers prepare for technical interviews. It&apos;s also provide concept about Data Structures and Algorithm, System Design, and Machine Learning courses.</p>
                <p className={styles.content_title}>Skill Learned From <span className={styles.from_platform}><a href='https://www.algoexpert.io/product' target='_blank' rel='noopener noreferrer'>AlgoExpert</a></span></p>
                <div className={styles.content_split}>
                {/* <div className={styles.content_split_two_container}> */}
                    {/* <div className={styles.content_split_two_title}>
                    <p className={styles.content_split_title}>Data Structures and Algorithms</p>
                    <p className={styles.content_split_title}>System Design</p>
                    </div> */}
                    <div className={styles.content_split_two_contents}>
                    <ul className={styles.content_list_split}>
                        <p className={styles.content_split_title}>Data Structures and Algorithms</p>
                        <li>Big O Notation</li>
                        <li>Graphs</li>
                        <li>Heaps</li>
                        <li>Stacks and Queues</li>
                        <li>Hash Tables</li>
                        <li>Dynamic Programming</li>
                    </ul>
                    <ul className={styles.content_list_split}>
                        <p className={styles.content_split_title}>System Design</p>
                        <li>Client-Server Model</li>
                        <li>Networking</li>
                        <li>Storage</li>
                        <li>Latency and Throughput</li>
                        <li>Proxies</li>
                        <li>Load Balancers</li>
                        <li>Pub/Sub</li>
                    </ul>
                    </div>
                {/* </div> */}
                </div>
            </div>
            </div>
        </div>
        </div>



        {/* About me */}
        <div className={styles.about_me__container} id='about me'>
            <p className={styles.about_me__title} data-aos='fade-up'>About Me</p>
            <p className={styles.about_me__description} data-aos='fade-up' >I started having an interest in technology was back in 2019. From that time onwards, I started to pick up more about programming concepts, data structure and algorithms, and learn other programming languages. It has been 4 years going by, and I&apos;m still in love with technology, I believe it is time to step out of my comfort zone and truly live a life that I always wanted. So I decided to venture into the field of technology with uncertainty but with a plan and lots of passion.</p>
            <br/>
            <p className={styles.about_me__description} data-aos='fade-up' >Currently, I&apos;m learning how to use Flutter to build an app for iOS, Android, and/or the web. In the meantime, I&apos;m also strengthening my knowledge and skill on Tensorflow. </p>
            {/* <ol className={styles.about_me__description} data-aos='fade-up' >
            <li>Flutter</li>
            <li>Tensorflow</li>
            </ol> */}
        </div>



        {/* Get In Touch Section */}
        <div className={styles.me__container} data-aos='fade-up'>
          <p className={styles.title}></p>
          <div className={styles.message_container}>
              <p className={styles.message_description}>I&apos;m currently looking for opportunity where I can put my abilities to work for a mission I&apos;m passionate about. I&apos;m happy to connect with you, who share the same passion as me. </p>
              {(dark)
              ? <a href='https://www.linkedin.com/in/chongzhenyang0405/' target='_blank' rel='noopener noreferrer'><ButtonDark>Connect With Me</ButtonDark></a>
              : <a href='https://www.linkedin.com/in/chongzhenyang0405/' target='_blank' rel='noopener noreferrer'><ButtonLight>Connect With Me</ButtonLight></a>
              }
          </div> 
        </div>


        {/* Footer Section */}
        <div className={styles.social_media_container}>
          <div className={styles.external_container}>
            <a href='https://github.com/zhenyang0405' target='_blank' rel='noopener noreferrer' ><div className={`${styles.github_logo} ${styles.external_link_one}`} data-aos='fade-up' data-aos-delay='2100' ></div></a>
            <a href='https://www.linkedin.com/in/chongzhenyang0405/' target='_blank' rel='noopener noreferrer'><div className={`${styles.linkedin_logo} ${styles.external_link_two}`} data-aos='fade-up' data-aos-delay='2300' ></div></a>
            <div className={styles.external_after} data-aos='fade-up' data-aos-delay='2500'></div>
          </div>
          <div className={styles.email_container}>
            <a href='mailto:zhenyang.chong0405@gmail.com' target='_blank' rel='noopener noreferrer'><span className={styles.email} data-aos='fade-up' data-aos-delay='2700' >zhenyang.chong0405@gmail.com</span></a>
            <div className={styles.email_after} data-aos='fade-up' data-aos-delay='2900' ></div>
          </div>
        </div>
        
        <div className={styles.footer_container}>
          <div className={styles.external_social_container}>
            <p className={styles.external_logo_social}>
            {(dark)
              ? <>
                  <a href='https://github.com/zhenyang0405' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo_white}></div></a>
                  <a href='https://www.linkedin.com/in/chongzhenyang0405/' target='_blank' rel='noopener noreferrer'><div className={styles.linkedin_logo_white}></div></a>
                </>
              : <>
                  <a href='https://github.com/zhenyang0405' target='_blank' rel='noopener noreferrer'><div className={styles.github_logo}></div></a>
                  <a href='https://www.linkedin.com/in/chongzhenyang0405/' target='_blank' rel='noopener noreferrer'><div className={styles.linkedin_logo}></div></a>
                </>
            }
            </p>
            <div className={styles.external_social_email_container}>
              <a href='mailto:zhenyang.chong0405@gmail.com' target='_blank'rel='noopener noreferrer' ><p className={styles.email_social}>zhenyang.chong0405@gmail.com</p></a>
            </div>
          </div>
        </div>

    </main>
  )
}

export default Mainpage