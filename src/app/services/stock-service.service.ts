import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as alphavantage from 'alphavantage';

@Injectable({
	providedIn: 'root'
})
export class StockService {
	private priceStream: Subject<any>;
	private alpha = alphavantage.default({ key: environment.AV_API_KEY});

	constructor() {
		this.priceStream = new Subject<any>();
	}

	getNewData(ticker) {
		// let tempPrice = 0;
		// let tempChange = 0;
		// const quote = this.alpha.data.quote(ticker, 'compact', 'json', '1min').then(data => {
		// 	tempPrice = data['Global Quote']['05. price'];
		// 	tempChange = data['Global Quote']['09. change'];
		// });
		// return {
		// 	price: tempPrice,
		// 	change: tempChange
		// };
		return {
			price: Math.random() * 100,
			change: Math.random()
		};
	}

	getPrices(ticker): Observable<any> {
		return new Observable(
			observer => {
				setInterval(() =>
					observer.next(this.getNewData(ticker)),
					1000); // 30 minutes
			});
	}
}
