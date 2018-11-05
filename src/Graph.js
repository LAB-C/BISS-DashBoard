import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './css/Graph.css';

var objDate = new Date();
var strDate =
    objDate.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate.toLocaleString("ko", { day: "numeric" });
console.log(strDate);
var objDate1 = new Date(new Date().setDate(new Date().getDate()-1));
var strDate1 =
    objDate1.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate1.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate1.toLocaleString("ko", { day: "numeric" });
var objDate2 = new Date(new Date().setDate(new Date().getDate()-2));
var strDate2 =
    objDate2.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate2.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate2.toLocaleString("ko", { day: "numeric" });

var objDate3 = new Date(new Date().setDate(new Date().getDate()-3));
var strDate3 =
    objDate3.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate3.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate3.toLocaleString("ko", { day: "numeric" });
var objDate4 = new Date(new Date().setDate(new Date().getDate()-4));
var strDate4 =
    objDate4.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate4.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate4.toLocaleString("ko", { day: "numeric" });
var objDate5 = new Date(new Date().setDate(new Date().getDate()-5));
var strDate5 =
    objDate5.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate5.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate5.toLocaleString("ko", { day: "numeric" });
var objDate6 = new Date(new Date().setDate(new Date().getDate()-6));
var strDate6 =
    objDate6.toLocaleString("ko", { year: "numeric"}) + ' ' +
    objDate6.toLocaleString("ko", { month: "numeric"  }) + ' ' +
    objDate6.toLocaleString("ko", { day: "numeric" });

function chartData() {
    return {
        labels: [strDate6, strDate5, strDate4, strDate3, strDate2, strDate1, strDate],
        datasets: [
            {
                label: 'PM2008 Cubic',
                borderColor: '#66a6ff',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'DHT-11',
                borderColor: '#89F7FE',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [76, 40, 30, 70, 25, 38, 90]
            },
            {
                label: 'Temperature Sensor',
                borderColor: '#ff9328',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [37, 80, 25, 38, 10, 60, 8]
            }
        ]
    }
}

const options = {
    scaleShowGridLines: false,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: false,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: false,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: false,
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
}


class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: chartData()
        }
    }
    render() {
        return(
            <div className="Graph">
                <h2><span>센서 그래프</span> Sensor Graph</h2>
                <Line
                    data={this.state.data}
                    options={options}
                    width="780"
                    height="250"
                />
            </div>
        );
    }
}

export default Graph;