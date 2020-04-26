// https://funcshui.now.sh/api/subdir/example

module.exports = function(options) {
  console.log(options)
  return function (req, res, next) {    
    const { name = 'World' } = req.query
    res.json(`Hello ${name} from subdirectory in /api!`)
    next();
  }
}