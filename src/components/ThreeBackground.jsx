import { useRef, useEffect, useState } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Create particles
    const PARTICLE_COUNT = 180
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }))

    // Mouse tracking
    let mouse = { x: -9999, y: -9999 }
    const handleMouse = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)

    let t = 0
    function draw() {
      t += 0.003
      ctx.clearRect(0, 0, w, h)

      // Ambient glow
      const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7)
      grd.addColorStop(0, 'rgba(6, 182, 212, 0.05)')
      grd.addColorStop(1, 'rgba(5, 14, 26, 0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      // Draw particles and connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // Drift + wave
        p.x += p.vx + Math.sin(t + i) * 0.05
        p.y += p.vy + Math.cos(t + i * 0.7) * 0.05

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          p.x += dx / dist * force * 2
          p.y += dy / dist * force * 2
        }

        // Wrap around
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx2 = p.x - q.x
          const dy2 = p.y - q.y
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (d < 100) {
            const opacity = (1 - d / 100) * 0.15
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Rotating rings
      const cx = w / 2
      const cy = h / 2
      ctx.save()
      ctx.translate(cx, cy)
      
      for (let ring = 0; ring < 3; ring++) {
        ctx.rotate(t * (ring % 2 === 0 ? 0.2 : -0.15))
        const ringR = 200 + ring * 120
        ctx.beginPath()
        ctx.arc(0, 0, ringR, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${ring === 1 ? '16, 185, 129' : '6, 182, 212'}, 0.06)`
        ctx.lineWidth = ring === 1 ? 1.5 : 1
        ctx.setLineDash([6, 14])
        ctx.stroke()
        ctx.setLineDash([])
      }
      ctx.restore()

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#050e1a' }}
    />
  )
}
