import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexChartComponent } from './components/index-chart/index-chart.component';
import { StockComponent } from './components/stock/stock.component';
import { PillComponent } from './components/pill/pill.component';

@NgModule({
	declarations: [
		AppComponent,
		IndexChartComponent,
		StockComponent,
		PillComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
