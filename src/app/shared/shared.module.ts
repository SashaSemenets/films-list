import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmsListComponent } from './film-list/films-list.component';
import { FilmItemComponent } from './film-item/film-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [FilmsListComponent, FilmItemComponent],
  declarations: [FilmsListComponent, FilmItemComponent]
})
export class SharedModule {}
