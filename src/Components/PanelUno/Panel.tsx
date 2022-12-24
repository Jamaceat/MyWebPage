import {Box, ChakraProps, Heading} from "@chakra-ui/react"
import React from "react"
import ButtonSkill from "./ButtonPanel"
import SkillInd from "./Skill"

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
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(14rem,1fr))",
		gap: "1rem",
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
			<Box sx={{...StyleCha.SkillsContenedor}}>
				<Box display={"flex"} flexDirection="row" alignItems={"center"}>
					<SkillInd color={"asdas"} percentage={30} img={"d"} />
					<Box display={"flex"} flexDir="column">
						<Heading as={"h3"} size={"md"}>
							Javascript
						</Heading>
						30%
					</Box>
				</Box>
				<SkillInd color={"asdas"} percentage={50} img={"d"} />
				<SkillInd color={"asdas"} percentage={50} img={"d"} />
				<SkillInd color={"asdas"} percentage={50} img={"d"} />
				<SkillInd color={"asdas"} percentage={50} img={"d"} />
				<SkillInd color={"asdas"} percentage={50} img={"d"} />
			</Box>
		</Box>
	)
}
