import './index.css'
import { Board } from './components/Board'
import { Timer } from './components/Timer'
import { useState } from 'react'

function App() {
  const [start, setStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [finishGame, setFinishGame] = useState(false)

  return (
    <div className='h-screen grid grid-flow'>
      <Timer 
        start={start}
        finishGame= {finishGame}
        setGameOver = {setGameOver}
      />
      <Board 
        start={start}
        gameOver = {gameOver}
        setGameOver = {setGameOver}
        setFinishGame= {setFinishGame}
        finishGame={finishGame}
        setStart= {setStart}
      />
    </div>
  )
}

export default App
