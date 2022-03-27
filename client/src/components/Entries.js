import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

//components
import Entry from "./Entry";

//materialUI
import { Stack } from "@mui/material";

function Entries() {
	const [listOfEntries, setListOfEntries] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3002/entries").then((res) => {
			setListOfEntries(res.data);
		});
	});
	return (
		<Stack spacing="{2}">
			{listOfEntries.map((entry, key) => {
				return <Entry key={key} entry={entry} />;
			})}
		</Stack>
	);
}

export default Entries;
