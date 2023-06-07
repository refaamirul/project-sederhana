// eslint-disable-next-line no-unused-vars
import React from 'react'
import Project1 from "../../../../public/project-1.jpg"

const Portfolio = () => {
  return (
    <section className="pt-36 pb-16">
      <div className="container">
        <div className="w-full px-4 m-auto">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 font-semibold">Portfolio</h4>
            <h2 className="mb-4">Project Saya</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error tenetur quibusdam culpa rem optio sed, sequi, nam quos totam ab vitae recusandae sit minima id harum enim dicta voluptatem.</p>
          </div>
        </div>
        <div className="flex w-full justify-center px-4">
          <div className="mb-12 p-4">
            <div className="overflow-hidden rounded-md shadow-md">
              <a href="https://amazon-youtube.pages.dev/">
                <img src={Project1} width={200} alt="" />
              </a>
            </div>
            <h3 className="mt-5 mb-3 font-semibold">Project 1</h3>
            <p className="text-base font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, iusto sint. Facere expedita provident magni sequi, quos, saepe exercitationem odio illum aperiam accusantium sunt quod, aliquid amet optio aut? Nemo, animi est placeat voluptatem inventore a mollitia quisquam! Delectus quasi qui nobis ratione inventore temporibus explicabo dolorum perferendis fugiat nihil.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio