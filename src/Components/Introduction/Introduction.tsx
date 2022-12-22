import {Box, ChakraProps, Container, Heading} from "@chakra-ui/react"
import React, {useEffect, useState} from "react"
import styles from "./intro.module.css"
import profile from "../../imgs/Myphoto/Johan.jpg"

const ResponsiveGrid: ChakraProps = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))",
}

const Spacing: ChakraProps = {marginBottom: "1rem"}
// const todoEstilo={(ResponsiveGrid: ChakraProps):{
// 	display: "grid",
// 	gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))",
// }}

export default function Intro() {
	const [Anim1, setAnim1] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setAnim1(true)
		}, 2500)
	}, [])

	return (
		<>
			<Box
				marginLeft={"12%"}
				paddingTop={"5rem"}
				sx={{...ResponsiveGrid, overflow: "hidden"}}
			>
				<Box display={"inline-block"} overflow="hidden" marginTop={"7rem"}>
					<span
						className={`${styles.terminal} ${!Anim1 && styles.hw} ${
							styles.bhw
						}`}
					>
						Hello world!
					</span>
					<span
						className={`${styles.terminal} ${
							(Anim1 && styles.im) || styles.hidde
						}`}
					>
						I'm Johan
					</span>
				</Box>
				<Container centerContent>
					<img alt="Johan" className={styles.photo} src={profile} />
				</Container>
				<Box fontFamily={"monospace"} marginTop="2rem">
					<Heading as="h2" size="md" sx={{...Spacing}}>
						Software Engineer
					</Heading>
					<Heading as="h2" size="md" sx={{...Spacing}}>
						Full Stack Web Development
					</Heading>
				</Box>
			</Box>
		</>
	)
}
