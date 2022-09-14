import { createContext } from "react"

export const UserContext = createContext({caughtFish: null, user: null, handleLongPressFish: () => null, getUserInfo: () => null})
