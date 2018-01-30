import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'ngx-approve-client',
  templateUrl: './approve-client.component.html',
  styleUrls: ['./approve-client.component.scss'],
})
export class ApproveClientComponent {
  employeeApproveForm: FormGroup;

  constructor() { }
}
