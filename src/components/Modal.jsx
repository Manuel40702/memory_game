import React from 'react'

export const Modal = ({
  gameOver,
  finishGame,
  setGameOver,
  score,
  handleNewGame
}) => {
  
  return (
    <div className={`${finishGame || gameOver ? "flex" : "hidden"} flex-col justify-center items-center gap-7 bg-gray-600 absolute w-[250px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg`}>
      {
        finishGame && 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-white w-12 h-12 bg-yellow-500 rounded-full p-2 animate-bounce'>
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
      }

      {
        gameOver && 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-yellow-500 w-16 h-16  rounded-full p-2 animate-pulse'>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>

      }
      
      <button className='text-white font-bold absolute right-0 top-0 mr-3 hover:text-yellow-500 text-2xl' onClick={() => setGameOver(false)}>&times;</button>

      <h1 className="text-white uppercase text-md font-bold tracking-wider">{finishGame ? '¡Ganaste!' : '¡Vuelve a intentarlo!'}</h1>
      <div className="flex justify-between gap-10">
        <p className="text-white">Score:</p>
        <p className="text-white">{score.current}</p>
      </div>

      <button className="cursor-pointer transition-all bg-yellow-500 text-white px-6 py-2 rounded-lg
                        border-yellow-600
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={handleNewGame}>
        New Game
      </button>

    </div>
  )
}
