import { firestoreDb } from "../config/firebase.config"
import { collection, getDocs, query, where, Timestamp, addDoc, setDoc, doc } from "firebase/firestore"
const paramCollection = collection(firestoreDb, "param")

const gamesCollection = collection(firestoreDb, `game-${process.env.REACT_APP_GAME_KEY}`)


const getPixel = async () => {
    const pixels = await getDocs(gamesCollection)
    const pixelsData = pixels.docs.map(pixel => {
        return pixel.data()
    })
    return pixelsData
}

const createPixelService = async ({x, y, color}) => {
    const newPixel = {
        x,
        y,
        color,
    }
    await setDoc(doc(firestoreDb, `game-${process.env.REACT_APP_GAME_KEY}`, `${newPixel.x}-${newPixel.y}`), newPixel)
}

export {
    getPixel,
    createPixelService
}