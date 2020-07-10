import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from '../../services/table.service';
import { PoliticiansService } from '../../services/politicians.service';
import { CanOrgPoliticaService } from '../../services/can-org-politica.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  politicians: string[] = ['FPV'];

  constructor(public tableService: TableService, private storage: AngularFireStorage,private _snackBar: MatSnackBar){

  }
  
  ngOnInit(): void {}

  legible(){
    this.tableService.legible();
    this.openSnackBar("SE VERIFICO EL ACTA");
    this.tableService.vaciarDatos(); 
    
  }

  noLegible(){
    this.tableService.noLegible();
    this.openSnackBar("SE SOLICITAR VOLVER A TOMAR UNA NUEVA FOTOGRAFIA DEL ACTA");
    this.tableService.vaciarDatos(); 
  }

  openSnackBar(mensaje : string) {
    this._snackBar.open(mensaje, "OK", {
      duration: 5000,
    });
  }
}
