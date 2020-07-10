import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  table = this.tableService.table;

  valores : any;
  dataActa: any[];

  constructor(public tableService: TableService) {}

  ngOnInit(): void {}

  click() {
    let dataac : any;
    
    this.tableService.ver();
  }

}
