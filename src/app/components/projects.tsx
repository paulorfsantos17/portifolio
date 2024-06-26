'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import data from '@/app/data/projects.json'

const CardProject = dynamic(() => import('./card-project'))

export default function Projects() {
  const { projects } = data

  function handleScrollRight() {
    const slider = document.getElementById('slider')

    if (slider) {
      slider.scrollBy({
        left: 300,
        behavior: 'smooth',
      })
    }
  }
  function handleScrollLeft() {
    const slider = document.getElementById('slider')

    if (slider) {
      slider.scrollBy({
        left: -300,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="my-8 ml-8 space-y-6 sm:mx-10" id="projects">
      <h2 className="font-ultralife text-3xl font-bold uppercase text-slate-200 sm:delay-500 sm:duration-500 sm:animate-in sm:fade-in sm:slide-in-from-left">
        Projetos
      </h2>

      <div
        className="flex  min-h-[450px] items-center gap-8 
          sm:delay-500 sm:duration-500 sm:animate-in sm:fade-in sm:slide-in-from-left"
      >
        <button
          aria-label="Slider Left"
          onClick={() => handleScrollLeft()}
          onMouseOver={() => handleScrollLeft()}
          className="hidden sm:block "
        >
          <FiChevronLeft className="h-8 w-8 rounded-full font-bold  text-primary-light ease-in hover:bg-primary-light hover:text-slate-200 hover:duration-300" />
        </button>
        <div
          id="slider"
          className=" flex h-[450px] items-center gap-12 overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden "
        >
          {projects.map((project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </div>
        <button
          aria-label="Slider Right"
          className="hidden sm:block"
          onMouseOver={() => handleScrollRight()}
          onClick={() => handleScrollRight()}
        >
          <FiChevronRight className="h-8 w-8 rounded-full font-bold  text-primary-light ease-in hover:bg-primary-light hover:text-slate-200 hover:duration-300" />
        </button>
      </div>
    </section>
  )
}
