// https://funcshui.now.sh/api/example

module.exports = (options) => {
  console.log(options)
  return (req, res, next) => {    
    const { name = 'World' } = req.query
    res.json('Hello ' + name)
    next();
  }
}