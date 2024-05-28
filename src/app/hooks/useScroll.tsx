import { useEffect, useState } from 'react'

export function useScroll() {
  // Armazena o valor do scroll
  const [scrollPosition, setScrollPosition] = useState(window.scrollY)

  useEffect(() => {
    // Função para atualizar o valor do scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    // Adiciona o evento de scroll ao window
    window.addEventListener('scroll', handleScroll)

    // Limpa o evento ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollPosition }
}
