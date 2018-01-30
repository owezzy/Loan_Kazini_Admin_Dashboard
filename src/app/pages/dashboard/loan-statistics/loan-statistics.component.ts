import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-loan-statistics',
  templateUrl: './loan-statistics.component.html',
  styleUrls: ['./loan-statistics.component.scss'],
})
export class LoanStatisticsComponent implements OnDestroy {
  single = [
    {
      name: 'Outstanding Loans',
      value: 8940000,
    },
    {
      name: 'Repaid Loans',
      value: 5000000,
    },
    {
      name: 'Current Balance',
      value: 7200000,
    },
  ];
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [
          colors.primaryLight,
          colors.infoLight,
          colors.successLight,
          colors.warningLight,
          colors.dangerLight,
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
