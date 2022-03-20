const dateDB = require('../modules/datesSchema')

const saveDate = async (req, res) => {
  res.send('Date Saved')
  const dates = new dateDB({ date: (new Date()), data: req.body })
  await dates.save()
}

module.exports = {saveDate}
