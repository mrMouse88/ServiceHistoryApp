import React from "react";
import "./App.css";

//components
import Entries from "./components/Entries";

//materialUI
import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";

function App() {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ksiąka serwisowa
					</Typography>
					<Button color="inherit">Dodaj wpis</Button>
				</Toolbar>
			</AppBar>
			<Container maxWidth="md">
				<Entries />
			</Container>
		</>
	);
}

export default App;
