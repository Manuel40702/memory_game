import { imgs } from "./data";
import { shuffleArray } from "./getImages";


export const createBoard = (size) => {

    const newImgs = imgs.slice(0, size);

    const duplicateCards = newImgs.flatMap((img, i) => {
        const duplicate = {
            ...img,
            id: img.id + newImgs.length
        }
        return [img, duplicate]
    })

    const newCards = shuffleArray(duplicateCards)
    const cards = newCards.map(card => {
        return {
            ...card,
            flipped: false,
            matched: false
        }
    })

    return cards
}