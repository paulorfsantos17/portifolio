'use client'

import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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

    console.log(slider?.scrollWidth)
  }

  return (
    <section className="my-8 ml-8 space-y-6 sm:mx-10">
      <ScrollAnimation animateIn="animate__fadeInLeft" offset={300}>
        <h2
          className="font-ultralife text-3xl
          uppercase text-slate-200"
        >
          Projetos
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInRight" delay={1000}>
        <div className="flex  min-h-[450px] items-center gap-8 ">
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
      </ScrollAnimation>
    </section>
  )
}
