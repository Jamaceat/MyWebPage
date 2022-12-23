import {Box, Button} from "@chakra-ui/react"
import React from "react"

export default function ButtonSkill() {
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
				sx={{
					transition: ".5s all",
					_hover: {paddingBottom: "1rem"},
					_focus: {
						boxShadow: "inset .10rem .10rem .5rem black",
						backgroundColor: "#4059AD",
						color: "white",
						padding: "2rem",
					},
				}}
			>
				Front End
			</Button>
			<Button>Back End</Button>
			<Button>Other</Button>
		</Box>
	)
}
