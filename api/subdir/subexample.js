https://funcshui.now.sh/api/subdir/example

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.json(`Hello ${name} from subdirectory in /api!`)
}