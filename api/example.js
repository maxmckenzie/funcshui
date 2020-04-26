// https://funcshui.now.sh/api/example

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  return res.json('Hello ' + name)
}