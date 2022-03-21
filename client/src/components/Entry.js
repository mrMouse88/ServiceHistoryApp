import React from "react";

function Entry({ entry }) {
	return (
		<div>
			<h2>{entry.date}</h2>
			<h3>{entry.description}</h3>
		</div>
	);
}

export default Entry;
