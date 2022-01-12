import { useRef, useState, useEffect } from 'react'
export default function useObserver(options) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState()

  const callBack = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible("intersecting")
    } else {
      setIsVisible(entry.boundingClientRect.top > 0 ? "top" : "bottom")
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
  return [containerRef, isVisible]
}
