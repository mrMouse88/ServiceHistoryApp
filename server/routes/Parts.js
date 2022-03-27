const express = require("express");
const router = express.Router();
const { Parts } = require("../models");

router.get("/:entryId", async (req, res) => {
	const entryId = req.params.entryId;
	const parts = await Parts.findAll({ where: { EntryId: entryId } });
	res.json(parts);
});

router.post("/", async (req, res) => {
	const part = req.body;
	await Parts.create(part);
	res.json(part);
});

module.exports = router;
