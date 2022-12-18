import React from "react"
import {createContext} from "react"
import data from "./Data/bd.json"

export const DataContext = createContext({})
export function Provider({children}: any) {
	console.log(data)
	return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}
