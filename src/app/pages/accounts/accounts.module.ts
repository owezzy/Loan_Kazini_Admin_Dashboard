import {NgModule} from '@angular/core';
import {AccountsRoutingModule, routedComponents} from './accounts-routing.module';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    AccountsRoutingModule,
  ],
  declarations: [routedComponents],
})
export class AccountsModule {
}
