import {Box, ChakraProps, Heading} from "@chakra-ui/react"
import React from "react"
import ButtonSkill from "./ButtonPanel"
import Skill from "./Skill"
import Javascript from "../../imgs/IconsSkills/Javascript.png"
import ts from "../../imgs/IconsSkills/Typescript.png"
import rac from "../../imgs/IconsSkills/React.png"
import c_s_s from "../../imgs/IconsSkills/css.png"
import h_t_m_l from "../../imgs/IconsSkills/HTML.png"
import kl from "../../imgs/IconsSkills/Learning.png"

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
				<Skill
					color={"#f8e41c"}
					percentage={95}
					img={Javascript}
					title={"Javascript"}
				/>
				<Skill
					color={"#007bd0"}
					percentage={80}
					img={ts}
					title={"Typescript"}
				/>
				<Skill color={"#68dcfc"} percentage={90} img={rac} title={"React"} />
				<Skill color={"#284ce4"} percentage={85} img={c_s_s} title={"CSS"} />
				<Skill color={"#e84c24"} percentage={95} img={h_t_m_l} title={"HTML"} />
				<Skill
					color={"#ac9b8a"}
					percentage={100}
					img={kl}
					title={"Learning  new  technologies"}
				/>
			</Box>
		</Box>
	)
}
