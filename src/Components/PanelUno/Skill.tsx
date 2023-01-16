import {Box, Heading} from "@chakra-ui/react"
import React, {useEffect, useRef} from "react"
import styles from "./Skill.module.css"
import {motion} from "framer-motion"
import {useInView} from "framer-motion"

interface Props {
	percentage: number
	color: string
	img: any
	title?: string
}

export default function Skill({percentage, color, img, title}: Props) {
	const isLast = useRef() as React.MutableRefObject<HTMLDivElement>

	return (
		<Box
			ref={isLast}
			display={"flex"}
			flexDirection="row"
			alignItems={"center"}
		>
			<SkillInd color={color} percentage={percentage} img={img} />
			<Box display={"flex"} flexDir="column">
				<Heading as={"h3"} size={"sm"}>
					{title}
				</Heading>
				<Heading as={"h5"} size={"sm"} fontWeight={0}>
					{percentage}%
				</Heading>
			</Box>
		</Box>
	)
}

function SkillInd({percentage, color, img}: Props) {
	const radio = 85
	const dashArray = radio * Math.PI * 2
	const dashOffSet = dashArray - (dashArray * percentage) / 100
	const MyRef = useRef() as React.MutableRefObject<HTMLInputElement>
	const isInView = useInView(MyRef, {once: true})
	useEffect(() => {
		console.log("Is in view?", isInView)
	}, [isInView])

	return (
		<Box position={"relative"}>
			<Box
				position="absolute"
				borderRadius={"full"}
				overflow={"hidden"}
				display={"flex"}
				top="5"
				left="5"
				ref={MyRef}
			>
				<img src={img} width="110" alt="SkillIcon" />
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
					<motion.circle
						cx={"50%"}
						cy={"50%"}
						strokeWidth="15px"
						r={radio}
						stroke={color}
						className={styles.circulo_progreso}
						animate={{
							strokeDashoffset: isInView
								? dashOffSet
								: dashArray + dashArray + dashArray + dashArray,
						}}
						transition={{type: "spring", duration: 5}}
						initial={{
							strokeDashoffset: dashArray + dashArray + dashArray + dashArray,
						}}
						style={{strokeDasharray: dashArray}}
						transform={`rotate (-90 ${200 / 2} ${200 / 2})`}
					/>
				</svg>
			</Box>
		</Box>
	)
}
