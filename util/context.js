import { createContext } from "react"
import { DARK } from "../styles/themes"

export const UserContext = createContext({caughtFish: null, user: null, theme: DARK, handleLongPressFish: () => null, getUserInfo: () => null, handleThemeChange: () => null })
