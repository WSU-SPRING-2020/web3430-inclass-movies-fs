export const indexPage = (req, res, next) => {
  res.render('layout', { title: 'Movies', content: 'index', header: false })
}

export const aboutPage = (req, res, next) => {
  res.render('layout', { title: 'Movies', content: 'about' })
}

export const contactPage = (req, res, next) => {
  res.render('layout', { title: 'Movies', content: 'contact' })
}