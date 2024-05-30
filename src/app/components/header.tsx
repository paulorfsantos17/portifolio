'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Logo from '@/app/assets/logo.svg'

import { useScroll } from '../hooks/useScroll'
import { LinkNav } from './link-nav'

export type LinkType = 'about' | 'projects' | 'abilities'

const PopoverNav = dynamic(() => import('./popover-nav'))

export default function Header() {
  const [isClosedNav, setIsclosedNav] = useState<boolean>(true)
  const [activeLink, setActiveLink] = useState<LinkType>('about')
  const { scrollPosition: scrollY } = useScroll()

  function handleSetClosedNav() {
    setIsclosedNav(!isClosedNav)
  }

  const ScrollActiveLink = useCallback(() => {
    const projectsPosition = document
      .getElementById('projects')
      ?.getBoundingClientRect().top as number

    const abilitiesPosition = document
      .getElementById('abilities')
      ?.getBoundingClientRect().top as number

    if (scrollY > 0 && projectsPosition > 0) {
      setActiveLink('about')
    }

    if (projectsPosition < 350 && abilitiesPosition > 0) {
      setActiveLink('projects')
    }

    if (abilitiesPosition < 350) {
      setActiveLink('abilities')
    }
  }, [scrollY])

  useEffect(() => {
    ScrollActiveLink()
  }, [ScrollActiveLink])

  return (
    <div className="w-full">
      <PopoverNav
        activeLink={activeLink}
        handleSetClosedNav={handleSetClosedNav}
        isClosedNav={isClosedNav}
      />
      <header className="top-0 z-40 flex min-h-20 min-w-full flex-col gap-2 border-b border-b-primary-light/30 bg-background py-4 shadow shadow-primary-light/30 sm:fixed  sm:px-14 sm:py-4">
        <div className="flex w-full items-center justify-center sm:justify-between ">
          <Image
            src={Logo}
            alt="Dev Paulo Logo"
            width={215}
            height={65}
            className="sm:h-12"
          />
          <button
            aria-label="button-popover"
            onClick={handleSetClosedNav}
            className="flex h-14 w-14 flex-col items-center justify-center gap-3  sm:hidden"
          >
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
          </button>

          <nav className="hidden gap-8 sm:flex">
            <LinkNav
              arialLabel="Sobre Web Developer Paulo Santos, DevPaulo."
              title="Sobre"
              idElement="about"
              active={activeLink === 'about'}
            />
            <LinkNav
              arialLabel="Projetos que o Web Developer Paulo Santos criou, DevPaulo."
              title="Projetos"
              idElement="projects"
              active={activeLink === 'projects'}
            />
            <LinkNav
              arialLabel="Habilidades que o Web Developer Paulo Santos executa, DevPaulo."
              title="Habilidades"
              idElement="abilities"
              active={activeLink === 'abilities'}
            />
          </nav>
        </div>
      </header>
    </div>
  )
}
