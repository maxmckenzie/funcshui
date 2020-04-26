// https://funcshui.now.sh/api/example

module.exports = function(options) {
  console.log(options)
  return function (req, res, next) {    
    const { name = 'World' } = req.query
    res.json('Hello ' + name)
    next();
  }
}