import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Film } from '../../core/models/film';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public movies: Array<Film> = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.showFavoriteFilms();
  }

  showFavoriteFilms() {
    this.getFavoritesFilms().then((res: Array<Film>) => {
      this.movies = res;

      this.movies.filter((movie: Film) => {
        movie.favorite = true;
      });

      this.movies.sort((a: Film, b: Film) => {
        return a.ranking - b.ranking;
      });
    });
  }

  getFavoritesFilms() {
    return this.storage.keys()
      .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
  }

  handleRemoveFromFavoriteList(event: string) {
    this.storage.remove(event);
    this.showFavoriteFilms();
  }
}
