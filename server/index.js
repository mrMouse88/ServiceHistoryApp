const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const entryRouter = require("./routes/Entries");
app.use("/entries", entryRouter);
const partsRouter = require("./routes/Parts");
app.use("/parts", partsRouter);

db.sequelize.sync().then(() => {
	app.listen(3002, () => {
		console.log("Server running on port 3001");
	});
});
