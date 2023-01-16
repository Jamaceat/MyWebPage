import {Box, Button} from "@chakra-ui/react"
import React from "react"

interface Props {
	panel: number
	setPanel: React.Dispatch<React.SetStateAction<number>>
}

export default function ButtonSkill({panel, setPanel}: Props) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: "1rem",
				alignItems: "End",
				marginBottom: ".25rem",
				flexWrap: "wrap",
				justifyContent: "end",
				width: "100%",
			}}
		>
			<Button
				isActive={panel === 0}
				onClick={() => {
					if (panel !== 3) {
						setPanel((prev) => 3)

						setTimeout(() => {
							setPanel((prev) => 0)
						}, 1200)
					}
				}}
				sx={{
					transition: ".5s all",
					_hover: {paddingBottom: "1rem"},
					_active: {
						boxShadow: "inset .10rem .10rem .5rem black",
						backgroundColor: "#4059AD",
						color: "white",
						padding: "2rem",
					},
				}}
			>
				Front End
			</Button>
			<Button
				isActive={panel === 1}
				onClick={() => {
					if (panel !== 3) {
						setPanel((prev) => 3)

						setTimeout(() => {
							setPanel((prev) => 1)
						}, 1200)
					}
				}}
				sx={{
					transition: ".5s all",
					_hover: {paddingBottom: "1rem"},
					_active: {
						boxShadow: "inset .10rem .10rem .5rem black",
						backgroundColor: "#4059AD",
						color: "white",
						padding: "2rem",
					},
				}}
			>
				Back End
			</Button>
			<Button
				isActive={panel === 2}
				onClick={() => {
					if (panel !== 3) {
						setPanel((prev) => 3)

						setTimeout(() => {
							setPanel((prev) => 2)
						}, 1200)
					}
				}}
				sx={{
					transition: ".5s all",
					_hover: {paddingBottom: "1rem"},
					_active: {
						boxShadow: "inset .10rem .10rem .5rem black",
						backgroundColor: "#4059AD",
						color: "white",
						padding: "2rem",
					},
				}}
			>
				Other
			</Button>
		</Box>
	)
}
