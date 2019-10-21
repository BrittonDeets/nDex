import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexChartComponent } from './index-chart/index-chart.component';
import { StockComponent } from './stock/stock.component';
import { PillComponent } from './pill/pill.component';

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
