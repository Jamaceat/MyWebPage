import {Box, ChakraProps, Container, Heading, Tooltip} from "@chakra-ui/react"
import React, {useEffect, useState} from "react"
import styles from "./intro.module.css"
import profile from "../../imgs/Myphoto/Johan.jpg"
import colombia from "../../imgs/Country/Colombia.png"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"

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
			<Box marginLeft={"12%"} paddingTop={"5rem"} sx={{...ResponsiveGrid}}>
				<Box display={"inline-block"} marginTop={"7rem"} marginBottom={"2rem"}>
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
					<Box marginTop="2rem">
						<Heading as="h2" size="md" sx={{...Spacing}}>
							Software Engineer
						</Heading>
						<Heading as="h2" size="md" sx={{...Spacing}}>
							Full Stack Web Developer
						</Heading>
					</Box>
					<Box paddingY={"1rem"}>
						<Tooltip label="I'm from Colombia" hasArrow>
							<img alt="Colombia" className={styles.country} src={colombia} />
						</Tooltip>
					</Box>
				</Box>
				{/* Iconos para redireccionar*/}
				<Container padding={"3rem"} sx={{overflow: "hidden"}} centerContent>
					<img alt="Johan" className={styles.photo} src={profile} />
					<Container
						sx={{
							position: "relative",
							top: "1rem",
							padding: "1rem",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
						centerContent
					>
						<Tooltip
							label="My LinkedIn"
							hasArrow
							openDelay={500}
							placement="top"
						>
							<a
								href={
									"https://www.linkedin.com/in/johan-andres-mendez-macea-3a72ab238/"
								}
								target="blank"
								className={styles.RedesSociales}
							>
								<LinkedInIcon />
							</a>
						</Tooltip>
						<Tooltip
							label={"Contact with me"}
							openDelay={500}
							hasArrow
							placement="top"
						>
							<a
								href={
									"mailto:jamaceat@gmail.com?Subject=I%20want%20to%20contact%20you"
								}
								target="blank"
								className={styles.RedesSociales}
							>
								<EmailIcon />
							</a>
						</Tooltip>
						<Tooltip
							label={"Github!!"}
							openDelay={500}
							hasArrow
							placement="top"
						>
							<a
								href={"https://github.com/Jamaceat"}
								target="blank"
								className={styles.RedesSociales}
							>
								<GitHubIcon />
							</a>
						</Tooltip>
					</Container>
				</Container>
			</Box>
		</>
	)
}
