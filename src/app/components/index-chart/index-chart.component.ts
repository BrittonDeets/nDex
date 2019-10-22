import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { R3TargetBinder } from '@angular/compiler';
@Component({
	selector: 'app-index-chart',
	templateUrl: './index-chart.component.html',
	styleUrls: ['./index-chart.component.scss']
})
export class IndexChartComponent implements OnInit {
	@ViewChild('lineChart', { static: true }) private chartRef;
	chart: any;

	constructor() { }

	ngOnInit() {
		this.chart = new Chart(this.chartRef.nativeElement, {
			type: 'line',
			data: {
				labels: [
					'date', 'date', 'date', 'date', 'date', 'date',
					'date', 'date', 'date', 'date', 'date', 'date',
					'date', 'date', 'date', 'date'],
				datasets: [{
					data: [0, 6, 8, 3, 5, 2, 8, 4, 12, 10, 11, 23, 35, 34, 30, 25, 10],
					pointRadius: 0,
					borderColor: 'rgba(0,23,44, 1)',
					label: 'nDex'
				}, {
					data: [0, 6, 7, 5, 3, 4, 2, 4, 4, 12, 10, 11, 23, 20, 18, 17, 19],
					pointRadius: 0,
					borderColor: 'rgba(200,113,44,1)',
					label: 'S&P 500'
				}, {
					data: [0, 4, -2, -3, 1, 6, 7, 8, 3, 2, 5, 10, 15, 12, 11, 5, 3, 2],
					pointRadius: 0,
					borderColor: 'rgba(10,200,90,1)',
					label: 'DJIA'
				}]
			},
			options: {
				legend: {
					display: true
				},
				elements: {
					line: {
						tension: 0,
						fill: false
					}
				}
			}
		});
		console.log(this.chart);
}
}
