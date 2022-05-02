import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from '../modelos/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = 'http://0.0.0.0/c?title='
  private url2: string = 'http://0.0.0.0/m?title='

  constructor(private http:HttpClient) { }

  getMovie(title: string){
    return this.http.get<any>(this.url + title)
  }

  getMovieM(title: string){
    return this.http.get<any>(this.url2 + title)
  }

}
