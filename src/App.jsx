

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// Importing icons for social media links
import Pic from './assets/Pic.png'
import linkedln from './assets/linkedln.png'
import leetcode from './assets/leetCode.png'
import icon1 from './assets/icons8-github-90.png'
// Importing images for the about section
// import about from './assets/about.png'

import './App.css'

function App() {
  return (
    <>
    {/* Header component with navigation links */}
    <Header /> 
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


      <Footer />
      
    </>
  )
}

export default App
