'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { LuX } from 'react-icons/lu'

import Logo from '@/app/assets/logo.svg'

import { useScroll } from '../hooks/useScroll'
import { LinkNav } from './LinkNav'

type linkType = 'about' | 'projects' | 'abilities'

export default function Header() {
  const [isClosedNav, setIsclosedNav] = useState<boolean>(true)
  const [activeLink, setActiveLink] = useState<linkType>('about')
  const { scrollPosition: scrollY } = useScroll()

  const stylesNavMobile =
    'absolute top-0 right-0 z-50 flex h-full w-full flex-col items-center gap-8 bg-slate-900 pt-8 text-xl '

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
      <nav className={isClosedNav ? 'hidden' : stylesNavMobile}>
        <a onClick={handleSetClosedNav} className="self-end  pr-4 ">
          <LuX className="h-8 w-8" />
        </a>
        <LinkNav
          title="Sobre"
          idElement="about"
          active={activeLink === 'about'}
          closedNav={handleSetClosedNav}
        />
        <LinkNav
          title="Projetos"
          idElement="projects"
          active={activeLink === 'projects'}
          closedNav={handleSetClosedNav}
        />
        <LinkNav
          title="Habilidades"
          idElement="abilities"
          active={activeLink === 'abilities'}
          closedNav={handleSetClosedNav}
        />
      </nav>
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
            onClick={handleSetClosedNav}
            className="flex h-14 w-14 flex-col items-center justify-center gap-3  sm:hidden"
          >
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
            <div className="h-1 w-full rounded-md bg-primary-light"></div>
          </button>

          <nav className="hidden gap-8 sm:flex">
            <LinkNav
              title="Sobre"
              idElement="about"
              active={activeLink === 'about'}
            />
            <LinkNav
              title="Projetos"
              idElement="projects"
              active={activeLink === 'projects'}
            />
            <LinkNav
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
