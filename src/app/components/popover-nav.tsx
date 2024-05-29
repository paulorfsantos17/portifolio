import React from 'react'
import { LuX } from 'react-icons/lu'

import { LinkType } from './header'
import { LinkNav } from './link-nav'

interface PopoverNavProps {
  isClosedNav: boolean
  activeLink: LinkType
  handleSetClosedNav: () => void
}

export default function PopoverNav({
  activeLink,
  handleSetClosedNav,
  isClosedNav,
}: PopoverNavProps) {
  const stylesNavMobile =
    'absolute top-0 right-0 z-50 flex h-full w-full flex-col items-center gap-8 bg-slate-900 pt-8 text-xl '

  return (
    <nav className={isClosedNav ? 'hidden' : stylesNavMobile}>
      <button
        aria-label="fechar menu"
        onClick={handleSetClosedNav}
        className="self-end  pr-4 "
      >
        <LuX className="h-8 w-8 text-slate-200" />
      </button>
      <LinkNav
        arialLabel="Sobre Web Developer Paulo Santos, DevPaulo."
        title="Sobre"
        idElement="about"
        active={activeLink === 'about'}
        closedNav={handleSetClosedNav}
      />
      <LinkNav
        arialLabel="Projetos que o Web Developer Paulo Santos criou, DevPaulo."
        title="Projetos"
        idElement="projects"
        active={activeLink === 'projects'}
        closedNav={handleSetClosedNav}
      />
      <LinkNav
        arialLabel="Habilidades que o Web Developer Paulo Santos executa, DevPaulo."
        title="Habilidades"
        idElement="abilities"
        active={activeLink === 'abilities'}
        closedNav={handleSetClosedNav}
      />
    </nav>
  )
}
