const {send} = require('micro');
const asciiCats = require('ascii-cats')

module.exports = (req, res) => {
  return send(res, 200, asciiCats());
}