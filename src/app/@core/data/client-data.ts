import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Client } from '../../pages/person/client';

export class ClientData implements InMemoryDbService {

  createDb() {
    const clients: Client[] = [
      {
        'id': 1,
    'firstName': 'Owen',
    'lastName': 'Adira',
    'gender': 'Male',
    'phoneNumber': 7043543,
    'typeOfIdentification': 'Passport',
    'identificationNumber': 'gsfd894',
    'company': 'Owezzy',
    'status': false,
      },
      {
        'id': 2,
        'firstName': 'Kun',
        'lastName': 'Aguero',
        'gender': 'Male',
        'phoneNumber': 2828788,
        'typeOfIdentification': 'Passport',
        'identificationNumber': 'gsfd88894',
        'company': 'Aktech',
        'status': false,
      },
      {
        'id': 5,
        'firstName': 'Esther',
        'lastName': 'Adira',
        'gender': 'Female',
        'phoneNumber': 482839,
        'typeOfIdentification': 'Passport',
        'identificationNumber': 'gsfd894',
        'company': 'Owezzy',
        'status': false,
      },
      {
        'id': 8,
        'firstName': 'Claudia',
        'lastName': 'Adira',
        'gender': 'Female',
        'phoneNumber': 28398,
        'typeOfIdentification': 'Passport',
        'identificationNumber': 'gsfd894',
        'company': 'Owezzy',
        'status': false,
      },
      {
        'id': 9,
        'firstName': 'Ben',
        'lastName': 'Obi',
        'gender': 'Male',
        'phoneNumber': 82839,
        'typeOfIdentification': 'Passport',
        'identificationNumber': 'gsfd894',
        'company': 'Owezzy',
        'status': false,
      },
    ];
    return { clients };
  }
}
