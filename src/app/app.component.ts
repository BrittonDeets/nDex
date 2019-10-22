import { StockService } from './services/stock-service.service';
import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';




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
		for (const stock of this.stocks) {
			this.stockService.getPrices(stock.ticker).subscribe(
				data => {
					stock.price = data.price.toFixed(2);
					stock.change = data.change.toFixed(2);
				}
			);
		}
	}

	ngOnInit() {
		this.initIndexValues();
	}

	initIndexValues() {
		const latestDate = this.getLatestDate();
		let previousDate = this.getDate(-1);
		if (latestDate !== this.getDate(0)) {
			previousDate = this.getDate(-2);
		}
		AWS.config.accessKeyId = environment.AWS_KEY_ID;
		AWS.config.secretAccessKey = environment.AWS_SECRET_KEY;
		AWS.config.update({region: 'us-east-1'});
		const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
		const params = {
			RequestItems: {
				ndex: {
					Keys: [
						{ date: { S : latestDate } },
						{ date: { S : previousDate } }
					],
					ProjectionExpression: 'price'
				}
			}
		};
		ddb.batchGetItem(params, (err, data) => {
			if (err) {
				console.log('Error', err);
			} else {
				this.price = +data.Responses.ndex[0].price.N;
				const prevPrice = +data.Responses.ndex[1].price.N;
				this.change = ((this.price - prevPrice) / prevPrice) * 100;
				// this.change = this.change.toFixed(2);
			}
		});
	}

	getLatestDate() {
		const hours = new Date().getHours();
		if (hours >= 16 && hours <  24) {
			return this.getDate(0);
		} else {
			return this.getDate(-1);
		}
	}

	getDate(daysAway: number) {
		const today = new Date();
		const targetDate = new Date(today);
		targetDate.setDate(targetDate.getDate() + daysAway);
		const dd = String(targetDate.getDate()).padStart(2, '0');
		const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
		const yyyy = targetDate.getFullYear();
		return mm + '-' + dd + '-' + yyyy;
	}
}
