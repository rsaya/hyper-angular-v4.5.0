import { ChartjsTypes } from "./chartjs.model";

const LINECHART: ChartjsTypes =
{
    type: 'line',
    chartLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Current Week',
        backgroundColor: 'rgba(114, 124, 245, 0.3)',
        borderColor: '#727cf5',
        data: [32, 42, 42, 62, 52, 75, 62]
    }, {
        label: 'Previous Week',
        fill: true,
        backgroundColor: 'transparent',
        borderColor: '#0acf97',
        borderDash: [5, 5],
        data: [42, 58, 66, 93, 82, 105, 92]
    }],
    chartOptions: {
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
                    color: 'rgba(0,0,0,0.05)'
                }
            }],
            yAxes: [{
                ticks: {
                    stepSize: 20
                },
                display: true,
                gridLines: {
                    color: 'rgba(0,0,0,0)',
                }
            }]
        }
    },
    colors: [{
        backgroundColor: 'rgba(114, 124, 245, 0.3)',
        borderColor: '#727cf5',

    },
    {
        backgroundColor: 'transparent',
        borderColor: '#0acf97',
        borderDash: [5, 5]
    }]
};

const BARCHART: ChartjsTypes = {
    type: 'bar',
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Sales Analytics',
            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
            barPercentage: 0.7,
            categoryPercentage: 0.5,
        },
        {
            label: 'Dollar Rate',
            backgroundColor: '#e3eaef',
            borderColor: '#e3eaef',
            hoverBackgroundColor: '#e3eaef',
            hoverBorderColor: '#e3eaef',
            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
            barPercentage: 0.7,
            categoryPercentage: 0.5,
        }
    ],
    chartOptions: {
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
    }
}

const DONUTCHART: ChartjsTypes = {
    type: 'doughnut',
    chartLabels: [
        'Direct',
        'Affilliate',
        'Sponsored',
        'E-mail'
    ],
    datasets: [
        {
            data: [300, 135, 48, 154],
            backgroundColor: [
                '#727cf5',
                '#fa5c7c',
                '#0acf97',
                '#ebeff2'
            ],
            borderColor: 'transparent',
            borderWidth: '3',
        }],
    chartOptions: {
        maintainAspectRatio: false,
        cutoutPercentage: 60,
        legend: {
            display: false
        }
    }

}

const RADARCHART: ChartjsTypes = {
    type: 'radar',
    chartLabels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "Desktops",
            backgroundColor: "rgba(57,175,209,0.2)",
            borderColor: "#39afd1",
            pointBackgroundColor: "#39afd1",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#39afd1",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "Tablets",
            backgroundColor: "rgba(161, 127, 224,0.2)",
            borderColor: "#a17fe0",
            pointBackgroundColor: "#a17fe0",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#a17fe0",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ],
    chartOptions: {
        maintainAspectRatio: false
    }
}

export { LINECHART, BARCHART, DONUTCHART, RADARCHART };