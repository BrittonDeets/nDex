import { StockService } from './services/stock-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'ndex';
	price = 254.23;
	change = 2.75;
	stocks = [
		{
			ticker: 'AAPL',
			price: 243.56,
			change: 3,
			weight: 5
		},
		{
			ticker: 'BAC',
			price: 243.56,
			change: 55.55,
			weight: 55.55
		},
		{
			ticker: 'TSLA',
			price: 243.56,
			change: -10,
			weight: 5
		},
		{
			ticker: 'QQQ',
			price: 243.56,
			change: 3,
			weight: 5
		}
	];

	constructor(private stockService: StockService) {
		for (let stock of this.stocks) {
			this.stockService.getPrices(stock.ticker).subscribe(
				data => {
					stock.price = data.price.toFixed(2);
					stock.change = data.change.toFixed(2);
				}
			);
		}
	}

	ngOnInit() {
	}

}
