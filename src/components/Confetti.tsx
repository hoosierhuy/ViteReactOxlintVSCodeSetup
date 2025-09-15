import '../css/styles.css'
import ConfettiGenerator from 'confetti-js'
import { useEffect, useState } from 'react'

const ConfettiCanvas: React.FC = () => {
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  return <canvas id="confetti-canvas"></canvas>
}

const ConfettiParty: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const toggleConfetti = () => setShowConfetti(!showConfetti)
  return (
    <div className="container">
      <button onClick={toggleConfetti}>
        {showConfetti ? 'Okay, Okay, Enough Already.' : "Let's Party!"}
      </button>
      {showConfetti && <ConfettiCanvas />}
    </div>
  )
}

export default ConfettiParty
