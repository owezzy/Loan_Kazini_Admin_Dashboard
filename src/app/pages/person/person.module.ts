import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import {PersonRoutingModule, routedComponents} from './person-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {ClientFilterPipe} from '../../@core/data/client-filter.pipe';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import {ClientDetailGuard, EditClientGuard} from '../../@core/data/client-guard.guard';
import { ClientServiceService } from '../../@core/data/client-service.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ClientData} from '../../@core/data/client-data';

@NgModule({
  imports: [
    ThemeModule,
    PersonRoutingModule,
    Ng2SmartTableModule,
    InMemoryWebApiModule.forRoot(ClientData),

  ],
  declarations: [routedComponents, ClientFilterPipe, ClientDetailComponent],
  providers: [SmartTableService, EditClientGuard, ClientDetailGuard, ClientServiceService],
})
export class PersonModule {
}
