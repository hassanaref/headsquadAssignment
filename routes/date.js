const express = require('express')
const {saveDate}= require('../controllers/dateController')
const router = express.Router()

router.route("/").post(saveDate)

module.exports = router