function index(req, res, next) {
  return res.render('pages/index', { isLoggesIn: req.user != undefined });
}
module.exports = {
  index,
}