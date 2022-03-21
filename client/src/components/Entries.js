import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

//components
import Entry from "./Entry";

function Entries() {
	const [listOfEntries, setListOfEntries] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3002/entries").then((res) => {
			setListOfEntries(res.data);
		});
	});
	return (
		<div>
			{listOfEntries.map((entry, key) => {
				return <Entry key={key} entry={entry} />;
			})}
		</div>
	);
}

export default Entries;
