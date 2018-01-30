import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {EmployerComponent} from './employer.component';
import {AddCompanyComponent} from './add-company/add-company.component';
import {EditCompanyComponent} from './edit-company/edit-company.component';
import {ApproveCompanyComponent} from './approve-company/approve-company.component';
import {ViewCompanyComponent} from './view-company/view-company.component';


const routes: Routes = [{
  path: '',
  component: EmployerComponent,
  children: [
    {
      path: 'add',
      component: AddCompanyComponent,
    }, {
      path: 'edit',
      component: EditCompanyComponent,
    }, {
      path: 'approve',
      component: ApproveCompanyComponent,
    }, {
      path: 'all',
      component: ViewCompanyComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EmployerRoutingModule {
}

export const routedComponents = [
  EmployerComponent,
  AddCompanyComponent,
  ApproveCompanyComponent,
  EditCompanyComponent,
  ViewCompanyComponent,
];
