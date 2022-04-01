import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//components
import Entries from "./components/Entries";
import AddEntry from "./components/AddEntry";
import ErrorPage from "./components/ErrorPage";

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
		<Router>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">Ksiąka serwisowa</Link>
					</Typography>
					<Link to="/addEntry">
						<Button color="inherit">Dodaj wpis</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<Box mt={3}>
				<Container maxWidth="md">
					<Routes>
						<Route path="/" element={<Entries />} />
						<Route path="/addEntry" element={<AddEntry />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Container>
			</Box>
		</Router>
	);
}

export default App;
