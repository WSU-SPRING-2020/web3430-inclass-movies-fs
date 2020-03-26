import { Routes } from '@angular/router'
import { MovieListComponent } from './components/movie-list/movie-list.component'
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component'
import { MovieFormComponent } from './components/movie-form/movie-form.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'
import { UserSigninComponent } from './components/user-signin/user-signin.component'
import { AuthGuard } from './services/auth.guard'

export const routes : Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/new', component: MovieFormComponent, canActivate : [AuthGuard]},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: 'movies/:id/edit', component: MovieFormComponent, canActivate : [AuthGuard]},
  {path: 'register', component: UserRegisterComponent},
  {path: 'signin', component: UserSigninComponent},
  {path: "", redirectTo: "movies", pathMatch: "full"}
]