
const express = require("express");
const projectsR = require("./routers/projects-router")
// const resourcesR = require("./routers/resources-router")
// const tasksR = require("./routers/resources-router")

const server = express();
server.use(express.json());

const PORT = process.env.PORT || 5000;


server.use(projectsR)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
