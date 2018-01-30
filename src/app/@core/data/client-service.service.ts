import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {Client} from '../../pages/person/client';

@Injectable()
export class ClientServiceService {
  private baseUrl = '/pages/person/clients';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get(this.baseUrl )
      .map(this.extractData)
      .do(data => console.log('getClients: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getClient(id: number): Observable<Client> {
    if (id === 0) {
      return Observable.of(this.initializeClient());
      // return Observable.create((observer: any) => {
        //   observer.next(this.initializeClient());
          // observer.complete();
      // });
    }
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log('getClient: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteClient(id: number): Observable<Response> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url)
      .do(data => console.log('deleteClient: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveClient(client: Client): Observable<Client> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new HttpHeaders({headers: headers});

    if (client.id === 0) {
      return this.createClient(client, options);
    }
    return this.updateClient(client, options);
  }

  private createClient(client: Client, options: HttpHeaders): Observable<Client> {
    client.id = undefined;
    return this.http.post(this.baseUrl, client, options)
      .map(this.extractData)
      .do(data => console.log('createClient: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private updateClient(client: Client, options: HttpHeaders): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.http.put(url, client, options)
      .map(() => client)
      .do(data => console.log('updateClient: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body.client || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  initializeClient(): Client {
    // Return an initialized object
    return {
      id: 0,
      firstName: null,
      lastName: null,
      gender: null,
      phoneNumber: null,
      typeOfIdentification: null,
      identificationNumber: null,
      company: null,
      status: false,
    };
  }
}
