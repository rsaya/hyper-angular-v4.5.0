// type
import { ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";

export interface ChartjsTypes {
    type: ChartType;
    chartOptions: ChartOptions;
    chartLabels: Label[];
    datasets: any;
    colors?: any[];
}