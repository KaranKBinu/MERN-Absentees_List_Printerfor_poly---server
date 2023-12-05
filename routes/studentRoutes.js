// studentRoutes.js
const express = require("express");
const router = express.Router();
const {
  SemesterOne,
  SemesterTwo,
  SemesterThree,
  SemesterFour,
  SemesterFive,
  SemesterSix,
} = require("../models/studentModel");

router.get("/:semester", async (req, res) => {
  const semesterParam = req.params.semester;

  try {
    let result;

    // Determine which model to use based on the semester parameter
    switch (semesterParam) {
      case "semesterOne":
        result = await SemesterOne.find();
        break;
      case "semesterTwo":
        result = await SemesterTwo.find();
        break;
      case "semesterThree":
        result = await SemesterThree.find();
        break;
      case "semesterFour":
        result = await SemesterFour.find();
        break;
      case "semesterFive":
        result = await SemesterFive.find();
        break;
      case "semesterSix":
        result = await SemesterSix.find();
        break;
      default:
        return res.status(400).json({ error: "Invalid semester specified" });
    }

    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
