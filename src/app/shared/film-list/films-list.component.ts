import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../core/models/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {
  @Input('movies') movies: Array<Film>;
  @Output() onHandleAddToFavoriteList = new EventEmitter();
  @Output() onHandleRemoveFromFavoriteList = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  handleAddToFavoriteList(event: string) {
    this.onHandleAddToFavoriteList.emit(event);
  }

  handleRemoveFromFavoriteList(event: string) {
    this.onHandleRemoveFromFavoriteList.emit(event);
  }
}
