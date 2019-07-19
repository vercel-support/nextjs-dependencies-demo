console.log('\nCWD: ',process.cwd(), '\n');
console.log('\ndirname: ',__dirname, '\n');

const app = require('../')
// const middleware = require('../middleware')
const { letsFail } = require('./fail');

app.get('*', async (req, res) => {
  res.json({
    data: letsFail()
  })
})

module.exports = app
