import {Box as Boxx, ChakraProps, Heading} from "@chakra-ui/react"
import {Box} from "@mui/material"
import React, {useRef, useState} from "react"
import ButtonSkill from "./ButtonPanel"
import Skill from "./Skill"
import Javascript from "../../imgs/IconsSkills/Javascript.png"
import ts from "../../imgs/IconsSkills/Typescript.png"
import rac from "../../imgs/IconsSkills/React.png"
import c_s_s from "../../imgs/IconsSkills/css.png"
import h_t_m_l from "../../imgs/IconsSkills/HTML.png"
import kl from "../../imgs/IconsSkills/Learning.png"
import tw from "../../imgs/IconsSkills/Tailwind.png"
import mui from "../../imgs/IconsSkills/MaterialUI.png"
import chui from "../../imgs/IconsSkills/ChakraUI.png"
import fm from "../../imgs/IconsSkills/FramerMotion.png"
import {AnimatePresence, motion, useInView} from "framer-motion"
import {SxProps} from "@mui/system"

interface EstilosCha {
	Contenedor: ChakraProps
	SkillsContenedor: SxProps
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
		borderRadius: "1rem",
		width: "full",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(14rem,1fr))",
		gap: "1rem",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	TitleSk: {
		padding: "1rem",
		margin: ".25rem",
		backgroundColor: "#DDDDDD",
		boxShadow: "inset .24rem .25rem .5rem black",
		borderRadius: "md",
		width: "fit-content",
		pointerEvents: "none",
	},
}

export default function PanelUno() {
	const [panel, setPanel] = useState(0)
	const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>
	const vista = useInView(containerRef, {once: true})
	const isEnd = useRef() as React.MutableRefObject<HTMLDivElement>

	return (
		<Boxx sx={{...StyleCha.Contenedor}} ref={isEnd}>
			<Boxx display={"flex"} flexDirection={"row"}>
				<Heading sx={{...StyleCha.TitleSk}}>Skills</Heading>
				<ButtonSkill panel={panel} setPanel={setPanel} isEnd={isEnd} />
			</Boxx>
			<AnimatePresence>
				{panel === 0 && (
					<Box
						ref={containerRef}
						component={motion.div}
						initial={{height: "0", opacity: 0}}
						animate={vista ? {height: "auto", opacity: 1} : {}}
						transition={{duration: 1}}
						exit={{height: 0, opacity: 0}}
						key={"Front"}
						sx={{...StyleCha.SkillsContenedor}}
					>
						<>
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
							<Skill
								color={"#68dcfc"}
								percentage={90}
								img={rac}
								title={"React"}
							/>
							<Skill
								color={"#284ce4"}
								percentage={85}
								img={c_s_s}
								title={"CSS"}
							/>
							<Skill
								color={"#e84c24"}
								percentage={95}
								img={h_t_m_l}
								title={"HTML"}
							/>
							<Skill
								color={"#08accc"}
								percentage={60}
								img={tw}
								title={"Tailwindcss"}
							/>
							<Skill
								color={"#0884fc"}
								percentage={80}
								img={mui}
								title={"MaterialUI"}
							/>
							<Skill
								color={"#08c4bc"}
								percentage={80}
								img={chui}
								title={"ChakraUI"}
							/>
							<Skill
								color={"#ac2ce3"}
								percentage={60}
								img={fm}
								title={"Framer Motion"}
							/>
							<Skill
								color={"#000000"}
								percentage={60}
								img={"https://i.imgur.com/Dzy1acL.png"}
								title={"NextJS"}
							/>
							<Skill
								color={"#764abc"}
								percentage={60}
								img={"https://i.imgur.com/u9soIvQ.png"}
								title={"Redux"}
							/>
							<Skill
								color={"#ac9b8a"}
								percentage={100}
								img={kl}
								title={"Learning  new  technologies"}
							/>
						</>
					</Box>
				)}

				{/* new box */}
				{panel === 1 && (
					<Box
						component={motion.div}
						initial={{height: "0", opacity: 0}}
						animate={{height: "auto", opacity: 1}}
						transition={{duration: 1}}
						exit={{height: 0, opacity: 0}}
						key={"Back"}
						sx={{...StyleCha.SkillsContenedor}}
					>
						<>
							<Skill
								color={"#8cc84b"}
								percentage={70}
								img={"https://i.imgur.com/NuW6Gr1.png"}
								title={"NodeJS"}
							/>
							<Skill
								color={"#000000"}
								percentage={70}
								img={"https://i.imgur.com/K6PkEZL.png"}
								title={"ExpressJS"}
							/>
							<Skill
								color={"#007bd0"}
								percentage={80}
								img={ts}
								title={"Typescript"}
							/>
							<Skill
								color={"#812c96"}
								percentage={15}
								img={"https://i.imgur.com/2oF2PJI.png"}
								title={"C#"}
							/>
							<Skill
								color={"#20b586"}
								percentage={70}
								img={"https://i.imgur.com/PrR2emr.png"}
								title={"Rest"}
							/>
						</>
					</Box>
				)}

				{panel === 2 && (
					<Box
						component={motion.div}
						initial={{height: "0", opacity: 0}}
						animate={{height: "auto", opacity: 1}}
						transition={{duration: 1}}
						exit={{height: 0, opacity: 0}}
						key={"Others"}
						sx={{...StyleCha.SkillsContenedor}}
					>
						<>
							<Skill
								color={"#2687cf"}
								percentage={80}
								img={"https://i.imgur.com/jTb0fzm.png"}
								title={"SQL"}
							/>
							<Skill
								color={"#4faa41"}
								percentage={60}
								img={"https://i.imgur.com/UDHcu3Z.png"}
								title={"MongoDB"}
							/>
							<Skill
								color={"#000000"}
								percentage={100}
								img={"https://i.imgur.com/4ztcV4v.png"}
								title={"Notion"}
							/>
							<Skill
								color={"#099cec"}
								percentage={70}
								img={"https://i.imgur.com/Yz8xfRA.png"}
								title={"Docker"}
							/>
							<Skill
								color={"#346e9e"}
								percentage={80}
								img={"https://i.imgur.com/SpjocqE.png"}
								title={"Python"}
							/>
						</>
					</Box>
				)}
			</AnimatePresence>
			{/* <Box ref={isEnd}></Box> */}
		</Boxx>
	)
}
