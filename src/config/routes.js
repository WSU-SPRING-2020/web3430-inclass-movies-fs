import express from 'express'
import {indexPage} from '../app/controllers/index.controller'
let router = express.Router()

export function configureRoutes(app){
  router.get('/', indexPage)

  app.use('/', router)
}