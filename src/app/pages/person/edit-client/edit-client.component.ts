import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {Client} from '../client';
import {ClientServiceService} from '../../../@core/data/client-service.service';

import {GenericValidator} from '../../../@core/data/generic-validator';

@Component({
  selector: 'ngx-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  errorMessage: string;
  clientForm: FormGroup;

  client: Client;
  private sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientServiceService) {
    // Defines all of the validation messages for the form
    /**
     firstName: string;
     lastName: string;
     gender: string;
     phoneNumber: number;
     typeOfIdentification: string;
     identificationNumber: string;
     company: string;
     status: boolean;*/
    this.validationMessages = {
      firstName: {
        required: 'FirstName name is required.',
      },
      lastName: {
        required: 'LastName name is required.',
      },
      phoneNumber: {
        required: 'Phone Number is required.',
      },
      identificationNumber: {
        required: 'identification Number code is required.',
      },
      company: {
        required: 'Company Name is required.',
      },
    };

    // Define an instance of the validator for use with this form.
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      IdentificationGroup: this.fb.group({
        identificationNumber: ['', Validators.required],
        typeOfIdentification: [''],
      }),
      gender: [''],
      status: [''],
      company: ['', Validators.required],
    });

    /**    // Read the client Id from the route parameter
     this.sub = this.route.params.subscribe(
     params => {
        let id = +params['id'];
        this.getClient(id);
      },
     );

     }

     ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

     ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    Observable.merge(this.clientForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.clientForm);
    });
  }

     getClient(id: number): void {
    this.clientService.getClient(id)
      .subscribe(
        (client: Client) => this.onClientRetrieved(client),
        (error: any) => this.errorMessage = <any>error,
      );
  }

     onClientRetrieved(client: Client): void {
    if (this.clientForm) {
      this.clientForm.reset();
    }
    this.client = client;
    // Update the data on the form
    this.clientForm.patchValue({
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      gender: this.client.gender,
      phoneNumber: this.client.phoneNumber,
      identificationNumber: this.client.identificationNumber,
      company: this.client.company,
    });
  }

     deleteProduct(): void {
    if (this.client.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the client: ${this.client.firstName}?`)) {
        this.clientService.deleteClient(this.client.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error,
          );
      }
    }
  }

     saveClient(): void {
    if (this.clientForm.dirty && this.clientForm.valid) {
      // Copy the form values over the client object values
      let c = Object.assign({}, this.client, this.clientForm.value);

      this.clientService.saveClient(c)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error,
        );
    } else if (!this.clientForm.dirty) {
      this.onSaveComplete();
    }
  }

     onSaveComplete(): void {
    // Reset the form to clear the flags
    this.clientForm.reset();
    this.router.navigate(['/all']);
  }
     */
  }
}
