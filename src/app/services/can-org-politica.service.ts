import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CanOrgPoliticaI } from '../models/can-org-politica';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanOrgPoliticaService {

  partPol: string[];

  constructor(private afs: AngularFirestore) {
  }
  public obtenerPartPoliticos() {
    return this.afs.collection<CanOrgPoliticaI>(
      'can_org_politica',
      ref => ref.where('id_org_politica_participa', '<=', 9))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data().sigla;
            const id = a.payload.doc.id;
            return data;
          })
        )
      );
  }
}
