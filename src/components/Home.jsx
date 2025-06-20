import React from 'react'
import Pic from '../assets/pic.png'
import linkedln from '../assets/linkedln.png'
import leetcode from '../assets/leetCode.png'
import icon1 from '../assets/icons8-github-90.png'


function Home() {
  return (
   <>
     {/*  Main content section with a welcome message and an image */}
      <section className='main-content'>
      <div className='content'>
        <h1>
                  Welcome to My Portfolio
        </h1>
        <p>
          Hello! I'm Hammad Ali, a passionate web developer with a knack for creating beautiful and functional websites. 
          Explore my work and feel free to reach out! </p>
          {/* social media links: */}
          <div className='social-links'>
            <a href="https://github.com/Hammad200217" target="_blank" rel="noopener noreferrer"><img src={icon1} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/hammad-ali-ba2824211/" target="_blank" rel="noopener noreferrer"><img src={linkedln} alt="linkedln" /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="leetcode" /></a>
             </div>
          </div>
          <div className='image'>
            <img className='img' src={Pic} alt="Hammad Ali" />
          </div>
         </section>
        {/* about section with a brief introduction */}
               <section className='about'>
                 <h2>About Me</h2>
                 <div className='about-container'>
                <div className='about-text'>
                <p>
                 I am a web developer with experience in building responsive and user-friendly websites.
                My skills include HTML, CSS, JavaScript, and React. I love to learn new technologies and improve my skills.
                </p>
              <p>In my free time, I enjoy exploring new places, reading books, and contributing to open-source projects.</p>
</div>
<div className='about-image'>
    <img src="" alt=""/>
</div>
                  </div>
                
              </section>
        {/* Footer component with contact information */}
        <section className='contact'>
        <div className='contact-container'>
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to reach out via email
            <a href="mailto:hammadali78056@gmail.com" target="_blank" rel="noopener noreferrer"> </a>or connect with me on social media. </p>
</div>
 </section>
   </>
  )
}

export default Home