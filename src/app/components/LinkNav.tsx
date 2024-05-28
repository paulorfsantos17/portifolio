import { MouseEvent } from 'react'
interface LinkNavProps {
  title: string
  idElement: string
  active?: boolean
}

export function LinkNav({ title, idElement, active = false }: LinkNavProps) {
  function handleNavigateToID(e: MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    const elemento = document.getElementById(id)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
  return (
    <a
      onClick={(e) => handleNavigateToID(e, idElement)}
      className={`text-md cursor-pointer font-bold   sm:text-xl ${active ? 'text-slate-200' : 'text-slate-600'}`}
    >
      {title}
    </a>
  )
}
