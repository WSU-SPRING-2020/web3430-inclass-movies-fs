import express from 'express'
import {indexPage, aboutPage, contactPage} from '../app/controllers/index.controller'
import {allMoviesAPI, oneMovieAPI, createMovieAPI, updateMovieAPI, deleteMovieAPI} from '../app/controllers/movie.controller'
import { registerUserAPI, signUserInAPI } from '../app/controllers/users.controller'
import { jwt } from 'jsonwebtoken'
import { APP_SECRET } from './vars'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
let router = express.Router()

export function configureRoutes(app){
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })
  router.get('/', indexPage)
  router.get('/about', aboutPage)
  router.get('/contact', contactPage)

  router.get('/movies*', indexPage)
  router.get('/register', indexPage)
  router.get('/signin', indexPage)
  
  // Movies
  router.get('/api/movies', allMoviesAPI)
  router.get('/api/movies/:id', oneMovieAPI)
  router.post('/api/movies', requireSignIn, createMovieAPI)
  router.put('/api/movies/:id', requireSignIn, updateMovieAPI)
  router.delete('/api/movies/:id', requireSignIn, deleteMovieAPI)

  // Users
  router.post('/api/users/register', registerUserAPI)
  router.post('/api/users/signin', signUserInAPI)

  app.use('/', router)
}