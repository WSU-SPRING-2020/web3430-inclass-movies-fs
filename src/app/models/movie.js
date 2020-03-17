import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

// Person and movie have a many to many relationship: 
// A movie can have directed by more that one person and
// one person can direct more that one movie.
let personSchema = new Schema({
    first_name: String,
    mi: String,
    last_name: String,
    movies: [{type: Schema.Types.ObjectId, ref: "Movie"}]
})

// Movie has a one to many relationship with reviews:
// A movie can have more that one review.
let reviewSchema = new Schema({
    comment: String,
    posted_at: Date
})

let movieSchema = new Schema({
    title: String,
    plot: String,
    poster: String,
    rated: String,
    rating: Number,
    votes: Number,
    genre: String,
    year: Number,
    imbdbID: String,
    releaseDate: Date,
    directors: [{type: Schema.Types.ObjectId, ref: "Person"}],
    reviews: [ reviewSchema ]
})

movieSchema.virtual('id').get(function(){
    return this._id.toHexString()
})

movieSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v
        delete ret._id
    }
})


export let Person = mongoose.model("Person", personSchema)
export let Movie = mongoose.model("Movie", movieSchema)