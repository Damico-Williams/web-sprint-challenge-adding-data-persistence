const express = require("express")
const db = require("./projects-model")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
	try {
		const projects = await db.getProjects()
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

router.post("/projects", async (req, res, next) => {
	try {
		const projects = await db.addProjects(req.body)
		res.status(201).json(projects)
	} catch(err) {
		next(err)
	}
})

module.exports = router;