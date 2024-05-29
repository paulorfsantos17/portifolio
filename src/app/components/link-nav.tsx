import { MouseEvent } from 'react'
interface LinkNavProps {
  title: string
  arialLabel: string
  idElement: string
  active?: boolean
  closedNav?: () => void
}

export function LinkNav({
  title,
  arialLabel,
  idElement,
  active = false,
  closedNav,
}: LinkNavProps) {
  function handleNavigateToID(e: MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    const elemento = document.getElementById(id)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'end' })
      closedNav && closedNav()
    }
  }
  return (
    <a
      aria-label={arialLabel}
      onClick={(e) => handleNavigateToID(e, idElement)}
      className={`text-md cursor-pointer font-bold   sm:text-xl ${active ? 'text-slate-200' : 'text-slate-600'}`}
    >
      {title}
    </a>
  )
}
