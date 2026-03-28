import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TEXTS = ['Lập trình viên', 'Full-stack Developer', 'Game Developer', 'FPT University']

export default function TypewriterRole() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TEXTS[index]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setIndex((index + 1) % TEXTS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, index])

  return (
    <span className="text-2xl font-medium text-cyan-300 font-mono min-h-[2rem] inline-block">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block ml-0.5 w-[2px] h-6 bg-cyan-400 align-middle"
      />
    </span>
  )
}
