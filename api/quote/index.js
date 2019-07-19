const {send} = require('micro');
const getQuote = require('forbes-quote');

module.exports = async (req, res) => {
  const quote = await getQuote();
  return send(res, 200, quote);
}