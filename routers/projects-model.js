const db = require("./../data/config")


function getProjects() {
    return db("projects");
  }

function getResources() {
    return db("resources");
  }

function getTasks() {
    return db("tasks");
  }

function addProjects(project) {
    return db("projects")
    .insert(project)
}

function addResources(resource) {
    return db("resources")
    .insert(resource)
}

function addTasks(task) {
    return db("tasks")
    .insert(task)
}

module.exports = {
    getProjects,
    getResources,
    addProjects,
    addResources,
    addTasks,
    getTasks
}