import { createContext } from 'react'

type userContext = {
	favorites: []
	history: []
	isMobile: boolean
	cleanHistory?: Function
	addFavorite?: Function
	deleteFavorite?: Function
}

const initialValues: userContext = {
	favorites: [],
	history: [],
	isMobile: false
}

export const UserContext = createContext(initialValues)

export const UserContextProvider = UserContext.Provider
