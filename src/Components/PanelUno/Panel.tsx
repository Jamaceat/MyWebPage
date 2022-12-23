import {Box, Button, ChakraProps, Heading} from "@chakra-ui/react"
import React from "react"
import ButtonSkill from "./ButtonPanel"

interface EstilosCha {
	Contenedor: ChakraProps
	SkillsContenedor: ChakraProps
	TitleSk: ChakraProps
}

const StyleCha: EstilosCha = {
	Contenedor: {
		backgroundColor: "#4059AD",
		padding: "1rem",
		borderRadius: "lg",
		marginY: "1rem",

		marginX: "12%",
	},
	SkillsContenedor: {
		padding: "1rem",
		margin: ".25rem",
		backgroundColor: "#DDDDDD",
		boxShadow: "inset .24rem .25rem .5rem black",
		borderRadius: "md",
		width: "full",
	},
	TitleSk: {
		padding: "1rem",
		margin: ".25rem",
		backgroundColor: "#DDDDDD",
		boxShadow: "inset .24rem .25rem .5rem black",
		borderRadius: "md",
		width: "fit-content",
	},
}

export default function PanelUno() {
	return (
		<Box sx={{...StyleCha.Contenedor}}>
			<Box display={"flex"} flexDirection={"row"}>
				<Heading sx={{...StyleCha.TitleSk}}>Skills</Heading>
				<ButtonSkill />
			</Box>
			<Box sx={{...StyleCha.SkillsContenedor}}>Hola</Box>
		</Box>
	)
}
