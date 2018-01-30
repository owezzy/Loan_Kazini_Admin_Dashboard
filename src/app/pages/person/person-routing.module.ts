import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PersonComponent} from './person.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {ApproveClientComponent} from './approve-client/approve-client.component';
import {ViewClientsComponent} from './view-clients/view-clients.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';
import {ClientDetailGuard, EditClientGuard} from '../../@core/data/client-guard.guard';



const routes: Routes = [{
  path: '',
  component: PersonComponent,
  children: [
    {
      path: 'clients',
      component: ViewClientsComponent,
    },
    {
      path: 'client/:id',
      component: ClientDetailComponent,
      canActivate: [ClientDetailGuard],
    }, {
      path: 'edit/:id',
      component: EditClientComponent,
      canDeactivate: [EditClientGuard],
    }, {
      path: 'approve',
      component: ApproveClientComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PersonRoutingModule {
}

export const routedComponents = [
  PersonComponent,
  EditClientComponent,
  ViewClientsComponent,
  ApproveClientComponent,
  ClientDetailComponent,
];
