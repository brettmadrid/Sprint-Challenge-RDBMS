const express = require("express");

const db = require("../dbHelpers.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await db.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving projects"
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await db.deleteProject(req.params.id);
    res.status(200).json({ removed: project });
  } catch (error) {
    res.status(500).json({
      err: "Error removing the project. Check to see if project exists!"
    });
  }
})

router.post("/", async (req, res) => {
  try {
    const project = await db.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error adding the the project."
    });
  }
});

module.exports = router;