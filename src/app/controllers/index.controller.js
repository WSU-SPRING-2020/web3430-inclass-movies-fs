export const indexPage = (req, res, next) => {
  res.render('index', { title: 'Movies' })
}