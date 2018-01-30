import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import {EmployerRoutingModule, routedComponents} from './employer-routing.module';

@NgModule({
  imports:
    [
      ThemeModule,
      EmployerRoutingModule,
    ],
  declarations:
    [
      routedComponents,
    ],
})
export class EmployerModule {
}
