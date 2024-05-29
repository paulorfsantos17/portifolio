'use client'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import CardProject from './card-project'

export default function Projects() {
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
      <h2 className="animate-in fade-in slide-in-from-left font-ultralife text-3xl font-bold uppercase text-slate-200 delay-500 duration-500">
        Projetos
      </h2>

      <div
        className="animate-in  fade-in slide-in-from-left flex 
          min-h-[450px] items-center gap-8 delay-500 duration-500"
      >
        <button
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
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
        <button
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
