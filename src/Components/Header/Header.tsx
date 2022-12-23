import {ChakraProps, Container, Heading, SlideFade} from "@chakra-ui/react"
import React, {useRef, useState} from "react"
import {useEffect} from "react"

const style: ChakraProps = {
	background:
		"radial-gradient(circle, rgba(189,218,255,1) 0%, rgba(148,187,233,1) 100%)",
	borderRadius: "1rem",
}

function Header() {
	const [Start, setStart] = useState(true)
	const [OtherStart, setOtherStart] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setStart(false)
		}, 3000)
		setTimeout(() => {
			setOtherStart(false)
		}, 4000)
		return
	}, [])

	let refD = useRef() as React.MutableRefObject<HTMLInputElement>

	return (
		<>
			<Container
				sx={{
					marginTop: "1rem",
					display: "flex",
				}}
				width="100%"
				centerContent
			>
				<Container position={"absolute"} width={"30rem"}>
					<SlideFade in={OtherStart}>
						<Container
							sx={{...style, width: "100%"}}
							centerContent
							width={"100%"}
							ref={refD}
						>
							<SlideFade in={Start}>
								<Heading
									as="h4"
									size="md"
									fontFamily={"Signika"}
									fontWeight={"300"}
									sx={{padding: "1rem"}}
								>
									Bienvenidos a mi página web
								</Heading>
							</SlideFade>
						</Container>
					</SlideFade>
				</Container>
			</Container>
		</>
	)
}

export default function HeaderPortafolio() {
	const [activate, setActivate] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setActivate(false)
		}, 4200)
	}, [])
	return (
		<header style={{position: "absolute", margin: "0 50%"}}>
			{activate ? (
				<>
					<Header />
				</>
			) : null}
		</header>
	)
}
