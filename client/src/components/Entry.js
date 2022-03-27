import React from "react";

//components
import Parts from "./Parts";

//materialUI
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Grid,
	Typography,
	Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Entry({ entry }) {
	const parts = [];
	// const parts = [
	// 	{
	// 		id: 1,
	// 		name: "Olej 5W40",
	// 		number: "",
	// 		price: "134,00",
	// 		description: "6 litrów",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "filtr oleju",
	// 		number: "Knecht 46D/1",
	// 		price: "36,50",
	// 		description: "z uszczelką pokrywy filtra i śruby spustowej",
	// 	},
	// ];
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Typography>Data: {entry.date}</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography>Przebieg: {entry.mileage}km</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant="h6">Opis</Typography>
				<Typography>{entry.description}</Typography>

				{Array.isArray(parts) && parts.length ? (
					<Box mt={3}>
						<Parts parts={parts} />
					</Box>
				) : (
					<span />
				)}
			</AccordionDetails>
		</Accordion>
	);
}

export default Entry;
