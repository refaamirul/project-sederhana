// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container">
        <div className="flex about-me">
          <div className="mb-10 w-full px-4">
              <h4 className="mb-3 uppercase font-bold">About Us</h4>
              <h2 className="mb-5 max-w-md text-3xl font-bold">Yuk, simak diri saya!</h2>
              <p className="max-w-md text-base font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis voluptas non optio corrupti impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis?</p>
          </div>
          <div className="w-full px-4">
            <h3 className="mb-4 text-2xl font-semibold">Berteman di Sosmed Saya</h3>
            <p className="mb-6 text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aut iste perspiciatis consequuntur enim sapiente alias illo cupiditate et blanditiis?</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About