import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmsService } from '../../core/films.service';
import { Chart } from 'chart.js';
import { Film } from '../../core/models/film';

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;
  public chartDatasY: Array<number>;
  public chartDatasX: Array<number>;
  public bars: any;

  constructor(public filmsService: FilmsService) { }

  ngOnInit() {
    this.showByDecade();
  }

  showByDecade() {
    this.filmsService.getFilmsByDecade(1954, 2010)
      .subscribe((res: any) => {
        const result = this.splitDatas(res);
        const {coordY, coordX} = result;

        this.chartDatasY = coordY.map((item) => item.length);
        this.chartDatasX = coordX;

        this.createBarChart(this.chartDatasX, this.chartDatasY)
      });
  }

  splitDatas(data: Array<Film>) {
    const chartDatasX = [];
    const firstYear = Number(data[0].year);
    const firstDecade = Math.floor(firstYear / 10) * 10;
    let nextDecade = firstDecade + 10;
    const result = [];

    while(nextDecade <= Number(data[data.length - 1].year)) {
      chartDatasX.push(nextDecade);
      const formatedArray = this.selectDecadeData(data, nextDecade);
      result.push(formatedArray);
      data = data.splice(formatedArray.length);
      nextDecade += 10;
    }

    return {coordY: result, coordX: chartDatasX};
  }

  selectDecadeData(datas: Array<Film>, decade: number) {
    const resArray = datas.map(data => {
      if(Number(data.year) < decade) {
        return data;
      }
    });

    return resArray.filter(function (el) {
      return el != null;
    });
  }

  createBarChart(coordX: Array<number>, coordY: Array<number>) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: coordX,
        datasets: [{
          label: 'Released films over 10 years',
          data: coordY,
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
