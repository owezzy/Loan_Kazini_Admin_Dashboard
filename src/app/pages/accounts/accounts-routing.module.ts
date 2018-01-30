import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountsComponent} from './accounts.component';
import {CompanyAccountComponent} from './company-account/company-account.component';
import {EmployeeAccountComponent} from './employee-account/employee-account.component';



const routes: Routes = [{
  path: '',
  component: AccountsComponent,
  children: [
    {
      path: 'company',
      component: CompanyAccountComponent,
    }, {
      path: 'employee',
      component: EmployeeAccountComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AccountsRoutingModule {
}

export const routedComponents = [
  AccountsComponent,
  CompanyAccountComponent,
  EmployeeAccountComponent,
];
