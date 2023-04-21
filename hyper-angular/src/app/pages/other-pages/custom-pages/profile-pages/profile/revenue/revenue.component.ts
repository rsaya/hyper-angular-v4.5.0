import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-profile-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  profileChartData!: { labels: Label[], datasets: any };
  chartoptions!: ChartOptions;


  @ViewChild('profileChart', { static: true }) profileChart!: ElementRef;


  constructor () { }

  ngOnInit(): void {
    this.initChart();
  }

  /**
   * initialize chart config
   */
  initChart(): void {
    // create gradient
    const ctx = this.profileChart.nativeElement.getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
    gradientStroke.addColorStop(0, "#fa5c7c");
    gradientStroke.addColorStop(1, "#727cf5");
    this.profileChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      datasets: [
        {
          label: 'Orders',
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          hoverBorderColor: gradientStroke,
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
        },
        {
          label: 'Revenue',
          backgroundColor: '#e3eaef',
          borderColor: '#e3eaef',
          hoverBackgroundColor: '#e3eaef',
          hoverBorderColor: '#e3eaef',
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
        }
      ]
    };
    this.chartoptions = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            color: 'rgba(0,0,0,0.05)'
          },
          stacked: false,
          ticks: {
            stepSize: 20
          }
        }],
        xAxes: [{
          stacked: false,
          gridLines: {
            color: 'rgba(0,0,0,0.01)'
          }
        }]
      }
    };

  }

}
