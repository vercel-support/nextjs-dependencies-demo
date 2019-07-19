const {send} = require('micro');
const catMe = require('cat-me')

module.exports = (req, res) => {
  return send(res, 200, catMe());
}