import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Entries() {
	useEffect(() => {
		axios.get("http://localhost:3002/entries").then((res) => {
			console.log(res.data);
		});
	});
	return <div>Entries</div>;
}

export default Entries;
