import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FilmsService } from '../../core/films.service';
import { DataApi } from '../../core/models/api-response';
import { Film } from '../../core/models/film';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  public movies: Array<Film>;

  constructor(public filmsService: FilmsService, private storage: Storage) { }

  ngOnInit() {
    this.showFilms();
    this.modifyMoviesProp();
  }

  showFilms() {
    this.filmsService.getTopFilms()
      .subscribe((res: DataApi) => {
        this.movies = res.movies;
      });
  }
  getFavoritesFilms() {
    return this.storage.keys()
  }

  modifyMoviesProp() {
    this.getFavoritesFilms().then((res: Array<string>) => {
      this.movies.filter((movie: Film) => {
        movie.favorite = res.some((item: string) => movie.idIMDB == item);
      });
    });
  }

  handleAddToFavoriteList(event) {
    this.storage.set(event.idIMDB, event);
    this.modifyMoviesProp();
  }

  handleRemoveFromFavoriteList(event: string) {
    this.storage.remove(event);
    this.modifyMoviesProp();
  }
  
}
