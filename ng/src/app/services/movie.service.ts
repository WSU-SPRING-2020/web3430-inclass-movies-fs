import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Movie } from '../models/movie';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http'

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable()
export class MovieService {
    moviesUrl = "/api/movies"
    private stats : {} = {}

    constructor(private http : HttpClient){}
    getStatsFor(id: number, like : boolean = false) : number {
      if(this.stats[id]){
        return like ? this.stats[id]['likes'] : this.stats[id]['views']
      } else {
        return 0
      }
    }

    logStats(id : number, like : boolean = false){
      if(this.stats[id] === undefined){
        this.stats[id] = { views: like ? 0 : 1, likes: like ? 1 : 0 }
      }else{
        if(like){
          this.stats[id]['likes']++;
        }else{
          this.stats[id]['views']++;
        }
      }
    }

    getMovie(id): Observable<Movie>{
      let url = `${this.moviesUrl}/${id}`
      return this.http.get<Movie>(url)
    }

    getMovies() : Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesUrl)
    }

    addMovie(movie : Movie) : Observable<Movie> {
      return this.http.post<Movie>(this.moviesUrl, movie, httpHeaders)
    }

    updateMovie(movie : Movie) : Observable<Movie> {
      let url = `${this.moviesUrl}/${movie.id}`
      return this.http.put<Movie>(url, movie, httpHeaders)
    }

    deleteMovie(movie : Movie) : Observable<{}> {
      let url = `${this.moviesUrl}/${movie.id}`
      return this.http.delete(url, httpHeaders)
    }
}