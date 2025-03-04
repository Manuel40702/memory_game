import './index.css'
import { Board } from './components/Board'
import { Timer } from './components/Timer'
import { useState } from 'react'

function App() {
  const [start, setStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  return (
    <div className='h-screen grid grid-flow'>
      <Timer 
        start={start}
        setGameOver = {setGameOver}
      />
      <Board 
        start={start}
        gameOver = {gameOver}
        setGameOver = {setGameOver}
        setStart= {setStart}
      />
    </div>
  )
}

export default App
