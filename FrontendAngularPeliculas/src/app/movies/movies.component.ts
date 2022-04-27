import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title!: string


  constructor(private movie:MovieService) { }

  ngOnInit(): void { }

  search(){
    console.log("entro")
    this.movie.getMovie(this.title).subscribe(data => {
      console.log(data["Pelicula"])
    })
  }

}
