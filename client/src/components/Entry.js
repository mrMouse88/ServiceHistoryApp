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

				{Array.isArray(entry.Parts) && entry.Parts.length ? (
					<Box mt={3}>
						<Parts parts={entry.Parts} />
					</Box>
				) : (
					<span />
				)}
			</AccordionDetails>
		</Accordion>
	);
}

export default Entry;
