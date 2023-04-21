import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartOptions, ChartType } from 'chart.js';

// type
import { BreadcrumbItem } from '../../../../shared/page-title/page-title.model';
import { Project } from '../shared/projects.model';

// data
import { DUMMY_PROJECTS } from '../shared/data';

@Component({
  selector: 'app-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pageTitle: BreadcrumbItem[] = [];
  selectedProject!: Project;
  projectChartOptions!: ChartOptions;
  chartType: ChartType = 'line';
  colors: any = {};

  constructor (private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.pageTitle = [{ label: 'Projects', path: '/' }, { label: 'Project Details', path: '/', active: true }];

    this.route.queryParams.subscribe(params => {
      if (params && params.hasOwnProperty('id')) {
        this.selectedProject = DUMMY_PROJECTS.filter(x => String(x.id) === params['id'])[0];
      } else {
        this.selectedProject = DUMMY_PROJECTS[0];
      }
    });
    this.initializeChartConfig();
  }

  /**
   * initialize chart configuration
   */
  initializeChartConfig(): void {
    Chart.defaults.global.defaultFontColor = '#8391a2';
    Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell, "Helvetica Neue",sans-serif';

    this.projectChartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        intersect: false
      },
      hover: {
        intersect: true
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 20
          },
          display: true,
          gridLines: {
            color: "rgba(0,0,0,0)",
          }
        }]
      }
    };

    this.colors = [{
      backgroundColor: 'rgba(10, 207, 151, 0.3)',
      borderColor: '#0acf97',
    },
    {
      backgroundColor: 'transparent',
      borderColor: '#727cf5',
      borderDash: [5, 5]
    }]
  }

}
