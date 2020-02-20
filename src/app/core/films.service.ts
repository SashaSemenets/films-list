import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Film } from './models/film';
import { DataApi } from './models/api-response';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private filmsUrl: string = '../../assets';

  constructor(private http: HttpClient) { }

  getTopFilms() {
    return this.http.get(this.filmsUrl+'/films.json')
      .pipe(
        map((dataAPi: DataApi) => dataAPi['data']),
      );
  }

  getFilmsByDecade(startDate: number, endDate: number) {
    return this.http.get(this.filmsUrl+'/decade.json')
      .pipe(
        map((dataAPi: DataApi) => dataAPi['data'].movies),
        map((res: Array<Film>) => res.sort(this.compareByDecade)),
        map((sortedDatas: Array<Film>) => sortedDatas.filter((data: Film) => this.filteredData(data, startDate, endDate))),
      )
  }

  compareByDecade(a: Film, b: Film) {
    if (Number(a.year) < Number(b.year))
      return -1;
    if (Number(a.year) > Number(b.year))
      return 1;
    return 0;
  }

  filteredData(data: Film, start: number, end: number) {
    if (Number(data.year) >= start && Number(data.year) <= end) {
      return data
    }
  }
}
