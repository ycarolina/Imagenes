import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoliticiansService {
  politicians = [
    {
      name: 'Creemos',
      description: 'Creemos'
    },
    {
      name: 'ADN',
      description: 'Acción Democrática Nacionalista'
    },
    {
      name: 'MAS-IPSP',
      description: 'Movimiento al Socialismo '
    },
    {
      name: 'FPV',
      description: 'Frente para la Victoria'
    },
    {
      name: 'PAN-BOL',
      description: 'Partido Acción Nacional Bolivia'
    },
    {
      name: 'Libre-21',
      description: 'LIBRE-21'
    },
    {
      name: 'CC',
      description: 'Comunidad Ciudadana'
    },
    {
      name: 'Juntos',
      description: 'JUNTOS'
    }
  ];
  constructor() { }
}
