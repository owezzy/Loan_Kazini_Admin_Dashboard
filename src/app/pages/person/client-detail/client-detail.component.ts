import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

import {Client} from '../client';
import {ClientServiceService} from '../../../@core/data/client-service.service';

@Component({
  selector: 'ngx-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent implements OnInit, OnDestroy {
  client: Client;
  errorMessage: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientServiceService) {
  }

  ngOnInit(): void {
   /** this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getClient(id);
      });
    */
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**getClient(id: number) {
    this.clientService.getClient(id).subscribe(
      client => this.client = client,
      error => this.errorMessage = <any>error);
  }
   */
  onBack(): void {
    this.router.navigate(['/all']);
  }

}
