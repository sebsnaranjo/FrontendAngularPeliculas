import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movies } from '../modelos/movie.interface'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title!: string
  pelicula_1!: Movies
  pelicula_2!: Movies
  pelicula_3!: Movies
  pelicula_4!: Movies
  pelicula_5!: Movies
  pelicula_6!: Movies
  pelicula_7!: Movies
  pelicula_8!: Movies
  pelicula_9!: Movies
  pelicula_10!: Movies
  pelicula_11!: Movies
  pelicula_12!: Movies
  pelicula_13!: Movies
  pelicula_14!: Movies
  pelicula_15!: Movies
  pelicula_16!: Movies
  pelicula_17!: Movies
  pelicula_18!: Movies
  pelicula_19!: Movies
  pelicula_20!: Movies

  constructor(private movie:MovieService) { }

  ngOnInit(): void { }

  search(){
    this.movie.getMovie(this.title).subscribe(data => {
      console.log(data)
      this.pelicula_1 = data[0]["Pelicula"]
      this.pelicula_2 = data[1]["Pelicula"]
      this.pelicula_3 = data[2]["Pelicula"]
      this.pelicula_4 = data[3]["Pelicula"]
      this.pelicula_5 = data[4]["Pelicula"]
      this.pelicula_6 = data[5]["Pelicula"]
      this.pelicula_7 = data[6]["Pelicula"]
      this.pelicula_8 = data[7]["Pelicula"]
      this.pelicula_9 = data[8]["Pelicula"]
      this.pelicula_10 = data[9]["Pelicula"]
    })
  }

  search2(){
    this.movie.getMovieM(this.title).subscribe(info => {
      console.log(info)
      this.pelicula_11 = info[0]["Pelicula"]
      this.pelicula_12 = info[1]["Pelicula"]
      this.pelicula_13 = info[2]["Pelicula"]
      this.pelicula_14 = info[3]["Pelicula"]
      this.pelicula_15 = info[4]["Pelicula"]
      this.pelicula_16 = info[5]["Pelicula"]
      this.pelicula_17 = info[6]["Pelicula"]
      this.pelicula_18 = info[7]["Pelicula"]
      this.pelicula_19 = info[8]["Pelicula"]
      this.pelicula_20 = info[9]["Pelicula"]
    })
  }

}
