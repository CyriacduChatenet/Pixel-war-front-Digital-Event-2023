import { firestoreDb } from "../config/firebase.config";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
  updateDoc,
} from "firebase/firestore";
const paramCollection = collection(firestoreDb, "param");

const gamesCollection = collection(
  firestoreDb,
  `game-${process.env.REACT_APP_GAME_KEY}`
);

const userCollection = collection(
    firestoreDb,
    'users'
)

const getPixel = async () => {
  const pixels = await getDocs(gamesCollection);
  const pixelsData = pixels.docs.map((pixel) => {
    return pixel.data();
  });
  return pixelsData;
};

const getUser = async (userId) => {
    const user = await getDoc(doc(userCollection, userId))
    return user.data()
}

const updateScore = async (userId) => {
    try {
        const user = await getUser(userId)
        console.log("user score => ", user.totalScore);
        await updateDoc(doc(userCollection, userId), {
            totalScore: user.totalScore + 1
        })
        const updatedUser = {
            ...user,
            totalScore: user.totalScore + 1
        }
        return updatedUser
    } catch (error) {
        console.log(error.message);
    }
}

const createPixelService = async ({ x, y, color, userId }) => {
  const user = await updateScore(userId)
  const newPixel = {
    x,
    y,
    color,
    user
  };
  await setDoc(
    doc(
      firestoreDb,
      `game-${process.env.REACT_APP_GAME_KEY}`,
      `${newPixel.x}-${newPixel.y}`
    ),
    newPixel
  );
};

const updatePixelsGrid = async (game, createPixel) => {
  onSnapshot(gamesCollection, (snapshot) => {
      snapshot.docChanges().forEach(
        async (change) => {
          console.log("change => ", change);
        const doc = change.doc.data();
        const ctx = game.getContext("2d");
        createPixel(ctx, doc.x, doc.y, doc.color, true);
      },
      (error) => {
        console.log("error => ", error);
      }
    );
  });
};

export { getPixel, createPixelService, updatePixelsGrid };
