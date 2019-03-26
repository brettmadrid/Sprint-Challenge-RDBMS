const express = require("express");

const db = require("../dbHelpers.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await db.getActions();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
    message: "Error retrieving actions"
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const actions = await db.getProjectActions(req.params.id)
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving actions"
      });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const action = await db.deleteAction(req.params.id);
    res.status(200).json({ removed: action });
  } catch (error) {
    res.status(500).json({
      err: "Error removing the action!"
    });
  }
})

router.post("/", async (req, res) => {
  try {
    const action = await db.addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({
      message: "Error adding the the action."
    });
  }
});

module.exports = router;