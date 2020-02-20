import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Film } from '../../core/models/film';
import { Director } from '../../core/models/director';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  @Input('movie') movie: any;
  @Output() onAddToFavoriteList = new EventEmitter();
  @Output() onRemoveFromFavoriteList = new EventEmitter();

  constructor(private storage: Storage) {}

  ngOnInit() {}

  modifyDirectorsField(directors) {
    return directors.map((director) => director.name).join(', ')
  }

  openFilmPageInBrowser(url) {
    window.open(url, '_blanc', 'location: yes');
  }

  addToFavoriteList(event) {
    this.onAddToFavoriteList.emit(event);
  }

  removeFromFavoriteList(event) {
    this.onRemoveFromFavoriteList.emit(event);
  }
}
