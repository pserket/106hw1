Highcharts.chart('container', {

    title: {
        text: 'Fulltime Men Applied'
    },

    yAxis: {
        title: {
            text: 'Number of Applicants'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'Fulltime Men Applied',
        data: [45636,41583,39779,37009,34618,31992,28758,25097,22332,21725,21590,20566,19838,18147].reverse()
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});