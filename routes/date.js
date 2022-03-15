const express = require('express')
const dateDB = require('../modules/datesSchema')
const router = express.Router()

router.route("/").post(async (req,res) => {
    res.send("Date Saved")
    let newDate = new Date
    const dates = new dateDB({date:newDate})
    await dates.save()
})

module.exports = router