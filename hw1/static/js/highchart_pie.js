// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Fulltime Men Applied Over 2005-2011'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    },

    series: [
        {
            name: "# Applicants",
            colorByPoint: true,
            data: [
                {
                    name: "2005",
                    y: 18147,
                    drilldown: "2005"
                },
                {
                    name: "2006",
                    y: 19838,
                    drilldown: "2006"
                },
                {
                    name: "2007",
                    y: 20566,
                    drilldown: "2007"
                },
                {
                    name: "2008",
                    y: 21590,
                    drilldown: "2008"
                },
                {
                    name: "2009",
                    y: 21725,
                    drilldown: "2009"
                },
                {
                    name: "2010",
                    y: 22332,
                    drilldown: "2010"
                },
                {
                    name: "2011",
                    y: 25097,
                    drilldown: "2011"
                }
            ]
        }
    ],
   
});