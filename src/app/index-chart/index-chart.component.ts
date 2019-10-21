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
				labels: ['date', 'date', 'date', 'date', 'date', 'date', 'date', 'date'],
				datasets: [{
					data: [1, 6, 8, 3, 5, 2, 8, 4]
				}, {
					data: [8, 6, 7, 5, 3, 4, 2, 4]
				}, {
					data: [1, 4, 2, 3, 5, 6, 7, 8]
				}]
			},
			options: {
				legend: {
					display: false
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
