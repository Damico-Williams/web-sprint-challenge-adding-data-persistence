const express = require("express")
const db = require("./resources-model")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await db.getresources()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.post("/resources", async (req, res, next) => {
	try {
		const resources = await db.addresources(req.body)
		res.status(201).json(resources)
	} catch(err) {
		next(err)
	}
})

module.exports = router;