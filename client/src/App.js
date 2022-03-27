import React from "react";
import "./App.css";

//components
import Entries from "./components/Entries";

//materialUI
import {
	AppBar,
	Toolbar,
	Box,
	Container,
	Typography,
	Button,
} from "@mui/material";

function App() {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ksiąka serwisowa
					</Typography>
					<Button color="inherit">Dodaj wpis</Button>
				</Toolbar>
			</AppBar>
			<Box mt={3}>
				<Container maxWidth="md">
					<Entries />
				</Container>
			</Box>
		</>
	);
}

export default App;
