import React from "react"
import "./App.css"
import HeaderPortafolio from "./Components/Header/Header"
import Intro from "./Components/Introduction/Introduction"
import PanelDos from "./Components/PanelDos/PanelDos"
import PanelUno from "./Components/PanelUno/Panel"
function App() {
	return (
		<>
			<HeaderPortafolio />
			<Intro />
			<PanelUno />
			<PanelDos />
		</>
	)
}

export default App
