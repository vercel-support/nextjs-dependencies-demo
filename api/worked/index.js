const app = require('../')

app.get('*', async (req, res) => {
  res.json({
    data: 'hey hey hey'
  })
})

module.exports = app
