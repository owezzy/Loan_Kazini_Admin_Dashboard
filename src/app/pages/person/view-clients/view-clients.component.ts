import {Component, OnInit} from '@angular/core';
import {Client} from '../client';
import {ClientServiceService} from '../../../@core/data/client-service.service';

@Component({
  selector: 'ngx-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
})
export class ViewClientsComponent implements OnInit {
  clients: Client[];
  listFilter: string;
  errorMessage: string;

  constructor(private clientService: ClientServiceService) {
  }

  ngOnInit(): void {
  //  this.clientService.getClients()
    //  .subscribe(clients => this.clients = clients,
      //  error => this.errorMessage = <any>error);
  }
}
