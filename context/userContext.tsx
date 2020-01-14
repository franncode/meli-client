import { createContext } from 'react'

type userContext = {
	favorites: []
	history: []
	cleanHistory?: Function
	addFavorite?: Function
	deleteFavorite?: Function
}

const initialValues: userContext = {
	favorites: [],
	history: []
}

const UserContext = createContext(initialValues)

export const UserContextProvider = UserContext.Provider
