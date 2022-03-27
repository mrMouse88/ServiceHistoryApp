import React from "react";

//materialUI
import {
	Paper,
	Typography,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
function Parts({ parts }) {
	return (
		<>
			<Typography variant="h6">Lista części</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center" width="25%">
								Nazwa
							</TableCell>
							<TableCell align="center" width="25%">
								Numer
							</TableCell>
							<TableCell align="center" width="10%">
								Cena
							</TableCell>
							<TableCell align="center" width="40%">
								Opis
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{parts.map((part) => (
							<TableRow key={part.id}>
								<TableCell>{part.name}</TableCell>
								<TableCell align="center">{part.number}</TableCell>
								<TableCell align="center">{part.price}</TableCell>
								<TableCell align="center">{part.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default Parts;
