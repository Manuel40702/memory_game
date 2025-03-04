import React, { useEffect, useState, useRef } from 'react'
import { imgs } from '../helpers/data'
import { Card } from './Card'
import { Modal } from './Modal'
import { createBoard } from '../helpers/createBoard'
import confetti from 'canvas-confetti'

let size = 4;

export const Board = ({setStart, start, gameOver, setGameOver}) => {

    const [cards, setCards] = useState([])
    const [flippedCard, setFlippedCard] = useState([])
    const [moves, setMoves] = useState(0)
    const [finishGame, setFinishGame] = useState(false)
    const [passLevel, setPassLevel] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const score = useRef(0)
    

    useEffect(() => {
        setCards(createBoard(size))
    }, [])

    useEffect(() => {
        if(passLevel && size + 2 <= imgs.length){
            calculateScore();
            size = size + 2 
            setCards([])
            setCards(createBoard(size))
            setPassLevel(false)
            setIsDisabled(false)

            confetti({
                particleCount: 200,
                startVelocity: 30,
                spread: 300, 
                gravity: 1.5,
                origin: {y:0}
            })
        }
    }, [passLevel])

    const calculateScore = () => {
        const pointLevel = size * 10;
        let total = score.current;
        if(moves === size){
            total = total + (size*2) + pointLevel
        } else if(moves > size && moves < size+5){
            total = total + size + pointLevel
        } else if(moves > size && moves < size+10){
            total = total + size/2 + pointLevel
        } else{
            total = total + Math.round(size/3) + pointLevel
        }
        setMoves(0)
        score.current = total
    }

    const handleCardClick = (id) => {

        if(!start) return;
        if(isDisabled) return;

        const [currentCard] = cards.filter(card => card.id === id)

        if(!currentCard.flipped && !currentCard.matched){
            currentCard.flipped = true

            const newFlippedCards = [...flippedCard, currentCard]
            setFlippedCard(newFlippedCards)

            if(newFlippedCards.length === 2){
                setIsDisabled(true)
                const [firstCard, secondCard] = newFlippedCards
                
                if(firstCard.img === secondCard.img){
                    firstCard.matched = true
                    secondCard.matched = true
                    setIsDisabled(false)
                }else{
                    setTimeout(() => {
                        firstCard.flipped = false
                        secondCard.flipped = false
                        setCards(cards)
                        setIsDisabled(false)
                    }, 1000)
                }

                setFlippedCard([])
                setMoves(moves + 1)
            }

            setCards(cards)
        }

        if(cards.every(card => card.matched)){
            setPassLevel(true)
            setIsDisabled(true)
        }
    }

    const handleNewGame = () =>{
        location.reload()
        /* size = 4
        setCards([])
        setCards(createBoard(size))
        setMoves(0)
        setStart(false)
        setPassLevel(false)
        setFinishGame(false)
        setGameOver(false)
        setIsDisabled(false)
        score.current = 0 */
    }

    return (
        <>
            {
                gameOver && <div className='fixed inset-0 bg-black opacity-50 z-10'></div> 
            }

            <div className='relative size-full flex items-center bg-amber-200 col-span-4 row-span-5'>
                <div className='mx-auto flex flex-col justify-center items-center'>
                    <h1 class="flex items-center text-5xl font-extrabold dark:text-white">
                        <span class="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Memory Game</span>
                        <span class=" text-yellow-600 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:text-yellow-600 ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </span>
                    </h1>
                    <h2 className='text-slate-500 font-semibold '>Score: {score.current}</h2>
                    <div className="grid grid-cols-4 gap-3 justify-center items-center px-3 py-5 my-5">
                        {
                            cards.map(card => (
                                <Card 
                                    card={card}
                                    handleCardClick = {handleCardClick}
                                    key={card.id}
                                />
                            ))
                        }
                    </div>
                    <div className='flex justify-around items-center gap-5'>
                        <button className="cursor-pointer transition-all bg-slate-500 text-white px-6 py-2 rounded-lg
                            border-slate-600
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={handleNewGame}>
                            New Game
                        </button>

                        <button className="cursor-pointer transition-all bg-slate-500 text-white px-6 py-2 rounded-lg
                            border-slate-600
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => setStart(true)}>
                            Start
                        </button>

                    </div>

                </div>
            </div>

            <Modal 
                gameOver = {gameOver}
                finishGame = {finishGame}
                setGameOver = {setGameOver}
                score = {score}
                handleNewGame = {handleNewGame}
            />

        </> 
    )
}
