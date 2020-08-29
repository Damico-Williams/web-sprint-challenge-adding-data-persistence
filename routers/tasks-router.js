const express = require("express")
const db = require("./tasks-model")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await db.gettasks()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

router.post("/tasks", async (req, res, next) => {
	try {
		const tasks = await db.addtasks(req.body)
		res.status(201).json(tasks)
	} catch(err) {
		next(err)
	}
})

module.exports = router;