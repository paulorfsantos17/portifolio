import { useEffect, useState } from 'react'

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return {
    scrollPosition,
  }
}
