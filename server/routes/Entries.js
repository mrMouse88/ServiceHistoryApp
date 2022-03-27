const express = require("express");
const router = express.Router();
const { Entries, Parts } = require("../models");

router.get("/", async (req, res) => {
	const entries = await Entries.findAll({ include: Parts });
	res.json(entries);
});

router.post("/", async (req, res) => {
	const entry = req.body;
	await Entries.create(entry);
	res.json(entry);
});

module.exports = router;
