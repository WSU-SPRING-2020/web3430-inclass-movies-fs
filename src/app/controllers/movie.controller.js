import { Movie } from '../models/movie'
import { render } from 'ejs'

export const allMoviesAPI = (req, res, next) => {
  Movie.find().select('-directors -__v -reviews').exec((err, movies) => {
    if(err){
      res.json({success: false, message: 'Failed query'})
      res.end()
    }else{
      res.write(JSON.stringify(movies))
      res.end()
    }
  })
}

export const oneMovieAPI = (req, res, next) => {
  Movie.findOne({_id: req.params.id}).select('-directors -__v').exec((err, movie) => {
    if(err){
      res.json({success: false, message: 'Failed query'})
      res.end()
    }else{
      res.write(JSON.stringify(movie))
      res.end()
    }
  })
}

export const createMovieAPI = (req, res, next) => {
  let movie = new Movie(req.body)
  movie.save(err => {
    if(err){
      res.json({success: false, message: 'unable to save'})
    }else{
      res.end()
    }
  })
}

export const updateMovieAPI = (req, res, next) => {
  Movie.findOne({_id: req.params.id}).select('-directors -__v').exec((err, movie) => {
    if(err){
      res.json({success: false, message: 'Failed query'})
      res.end()
    }else{
      Object.assign(movie, req.body)
      movie.save(err => {
        if(err){
          res.json({success: false, message: 'unable to save'})
        }else{
          res.end()
        }
      })
    }
  })
}

export const deleteMovieAPI = (req, res, next) => {
  Movie.findOne({_id: req.params.id}).select('-directors -__v').exec((err, movie) => {
    if(err){
      res.json({success: false, message: 'Failed query'})
      res.end()
    }else{
      Movie.findByIdAndDelete(req.params.id, err => {
        if(err){
          res.json({success: false, message: 'unable to delete'})
        }else{
          res.end()
        }
      })
    }
  })
}