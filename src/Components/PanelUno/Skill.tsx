import {Box, ChakraProps, Heading} from "@chakra-ui/react"
import React from "react"
import styles from "./Skill.module.css"
import Javascript from "../../imgs/IconsSkills/Javascript.png"

interface Props {
	percentage: number
	color: String
	img: any
}

interface estilos {
	[key: string]: {[key: string]: ChakraProps}
}

export default function SkillInd({percentage, color, img}: Props) {
	const radio = 85
	const dashArray = radio * Math.PI * 2
	const dashOffSet = dashArray - (dashArray * percentage) / 100
	return (
		<Box position={"relative"}>
			<Box
				position="absolute"
				borderRadius={"full"}
				overflow={"hidden"}
				display={"flex"}
				top="5"
				left="5"
			>
				<img src={Javascript} width="110" alt="SkillIcon" />
			</Box>
			<Box display={"flex"} flexDirection="row">
				<svg width={"150"} height={"150"} viewBox={"0 0 200 200"}>
					<circle
						cx={"50%"}
						cy={"50%"}
						strokeWidth="15px"
						r={radio}
						className={styles.circulo_fondo}
					/>
					<circle
						cx={"50%"}
						cy={"50%"}
						strokeWidth="15px"
						r={radio}
						stroke="#f8e41c"
						className={styles.circulo_progreso}
						style={{strokeDasharray: dashArray, strokeDashoffset: dashOffSet}}
						transform={`rotate (-90 ${200 / 2} ${200 / 2})`}
					/>
					<text
						x={"50%"}
						y={"50%"}
						dy="0.3em"
						fontSize={"2rem"}
						fontFamily="Righteous"
						textAnchor="middle"
					>
						{percentage}%
					</text>
				</svg>
			</Box>
		</Box>
	)
}
