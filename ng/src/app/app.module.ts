import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { routes } from './routes';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component'
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieDetailComponent,
    MovieFormComponent,
    MovieReviewComponent,
    UserRegisterComponent,
    UserSigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [MovieService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
