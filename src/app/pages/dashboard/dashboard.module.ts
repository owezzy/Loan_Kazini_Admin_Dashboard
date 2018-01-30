import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component'
import { LoanStatisticsComponent } from './loan-statistics/loan-statistics.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    LoanStatisticsComponent,
    ContactsComponent,
  ],
})
export class DashboardModule { }
