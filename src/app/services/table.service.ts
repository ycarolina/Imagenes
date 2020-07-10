import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

import { ComMesaImagenesTotalesI } from '../models/com-mesa-imagenes-totales';

import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public table = {};
  public id = '';
  public images = [''];
  submitted = false;
  estado :boolean;
  invalid = false;
  esta1 = true;
  acta : ComMesaImagenesTotalesI ;
  datosActa : any[] = [] ;
  datos : Observable<ComMesaImagenesTotalesI[]>;


  private comMesaImagenesTotalesCollection: AngularFirestoreCollection<ComMesaImagenesTotalesI>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private _snackBar: MatSnackBar
  ) {
    this.comMesaImagenesTotalesCollection = afs.collection<
      ComMesaImagenesTotalesI
    >('com_mesa_imagenes_totales');

    
  }

  public legible(){

    console.log("LEGIBLE DOC CON ID : "+ (this.acta.codigo_mesa).toString());
    this.acta.estado_registro = 4;

    this.comMesaImagenesTotalesCollection.doc((this.acta.codigo_mesa).toString()).update(this.acta).then( () => {
    console.log('Estado Actualizado a LEGIBLE');
    this.estado = true;


      }).catch( (error) => {
        console.log('Error', 'Mientras se actualizaba el estado a LEGIBLE!!', error);  
        this.estado = false;

    }); 
  }

  public noLegible(){

    console.log("NO LEGIBLE DOC CON ID : "+ (this.acta.codigo_mesa).toString());
    console.log(this.id);
    this.acta.estado_registro = 2;
    this.comMesaImagenesTotalesCollection.doc((this.acta.codigo_mesa).toString()).update(this.acta).then( () => {
    console.log('Estado Actualizado a NO LEGIBLE');
    this.estado = true;

      }).catch( (error) => {
        console.log('Error', 'Mientras se actualizaba el estado a NO LEGIBLE!!', error); 
        this.estado = false;

    }); 

  }

  public vaciarDatos(){
    
    this.table = {};
    this.id = '';
    this.images = [''];
    this.acta = null;

  }


  public ver(){
    this.esta1 = true;
    //let datosActas : any[] = [];


    this.datos = this.afs.collection<ComMesaImagenesTotalesI>('com_mesa_imagenes_totales', (ref) =>
        ref.where('estado_registro', '==', 1 )
      )
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as ComMesaImagenesTotalesI;
            const id = a.payload.doc.id;

            this.acta = data;
           return { id, ...data };
          })
        )
      ); 
      this.datos.subscribe( resp => {
        this.ver01(resp);
        //alert(22);
      }
      );

    /* if(resp.length >= 1){

      n = this.aleatorio((resp.length-1),0);
      dato = resp[n];

    }else{
      this.openSnackBar("YA NO EXISTEN MAS ACTAS");
    } */

    console.log("----------- : " + this.datosActa);

    /* console.log("Coleccion a editar : " + dato.id);
     */
    
  }
  ver01 (datos) {
    let n : number = 0;
    let dato : any ;
    console.log('ddd', datos);
    if(datos.length >= 1){

      n = this.aleatorio((datos.length-1),0);
      console.log('NNN',n);
      dato = datos[n];
      console.log('if', dato);

    }else{
      this.openSnackBar("YA NO EXISTEN MAS ACTAS");
    }
    
    if (this.esta1) {
      this.acta = dato;
      this.id = dato.id;
      this.table = dato;
      this.images = Object.values(dato.images);
      this.esta1 = false;
    }
    

  }
  public aleatorio(max, min): number {
    const numero = Math.round(Math.random() * (max - min) + min);
    return numero;

  }

  openSnackBar(mensaje : string) {
    this._snackBar.open(mensaje, "OK", {
      duration: 5000,
    });
  }




  
}
