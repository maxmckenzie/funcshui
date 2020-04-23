https://funcshui.now.sh/api/example

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.json('Hello ' + name)
}