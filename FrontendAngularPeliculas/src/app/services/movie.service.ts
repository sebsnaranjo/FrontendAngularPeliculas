import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from '../modelos/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = 'http://127.0.0.1:8000/?title='

  constructor(private http:HttpClient) { }

  getMovie(title: string){
    return this.http.get<any>(this.url + title)
  }

}
