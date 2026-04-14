import { useRef, useEffect } from 'react'

function DotCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const animId = useRef(null)
  const dots = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const GAP = 32
    const RADIUS = 0.8
    const INTERACT_RADIUS = 90
    const MAX_DISPLACEMENT = 6

    function resize() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      buildDots()
    }

    function buildDots() {
      dots.current = []
      const cols = Math.ceil(canvas.offsetWidth / GAP) + 1
      const rows = Math.ceil(canvas.offsetHeight / GAP) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.current.push({
            ox: c * GAP,
            oy: r * GAP,
            x: c * GAP,
            y: r * GAP,
          })
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      const mx = mouse.current.x
      const my = mouse.current.y

      const style = getComputedStyle(document.documentElement)
      const isDark = style.getPropertyValue('--bg').trim() === '#09090b'
      const baseColor = isDark ? 'rgba(161,161,170,' : 'rgba(113,113,122,'
      const accentColor = isDark ? '129,140,248' : '99,102,241'

      for (let i = 0; i < dots.current.length; i++) {
        const dot = dots.current[i]
        const dx = mx - dot.ox
        const dy = my - dot.oy
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < INTERACT_RADIUS) {
          const factor = 1 - dist / INTERACT_RADIUS
          const ease = factor * factor * factor
          const angle = Math.atan2(dy, dx)
          const push = MAX_DISPLACEMENT * ease
          dot.x += (dot.ox - Math.cos(angle) * push - dot.x) * 0.1
          dot.y += (dot.oy - Math.sin(angle) * push - dot.y) * 0.1

          const r = RADIUS + ease * 1
          const alpha = 0.12 + ease * 0.3
          ctx.beginPath()
          ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${accentColor},${alpha})`
          ctx.fill()
        } else {
          dot.x += (dot.ox - dot.x) * 0.06
          dot.y += (dot.oy - dot.y) * 0.06

          ctx.beginPath()
          ctx.arc(dot.x, dot.y, RADIUS, 0, Math.PI * 2)
          ctx.fillStyle = baseColor + '0.12)'
          ctx.fill()
        }
      }

      animId.current = requestAnimationFrame(draw)
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.current.x = -1000
      mouse.current.y = -1000
    }

    resize()
    draw()

    const section = canvas.closest('.hero') || canvas.parentElement
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId.current)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
      }}
    />
  )
}

export default DotCanvas
