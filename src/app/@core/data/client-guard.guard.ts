import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate} from '@angular/router';

import {EditClientComponent} from '../../pages/person/edit-client/edit-client.component';

@Injectable()
export class ClientDetailGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('invalid client Id');
      // start a new navigation to redirect to list page
      this.router.navigate(['/all']);
      // abort current navigation
      return false;
    }
    return true;
  }
}

@Injectable()
export class EditClientGuard implements CanDeactivate<EditClientComponent> {

  canDeactivate(component: EditClientComponent): boolean {
    if (component.clientForm.dirty) {
      let clientName = component.clientForm.get('clientName').value || 'New Client';
      return confirm(`Navigate away and lose all changes to ${clientName}?`);
    }
    return true;
  }
}

