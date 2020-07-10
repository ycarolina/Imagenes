import { Component, OnInit, Input } from '@angular/core';

// services
import { AngularFireStorage } from '@angular/fire/storage';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  segunda = false;
  // canvas = document.getElementById('canvas');
  // img = <HTMLCanvasElement>document.getElementById('img');
  // ratio;
  constructor(
    public tableService: TableService,
    private storage: AngularFireStorage
  ) {
    // positioning big img center to canvas center
    // this.initialize();
  }
  ngOnInit() {}
  segundaImagen() {
    this.segunda = true;
  }
  // initialize() {
  //   let x = -(this.img.width - this.canvas.offsetWidth) / 2 + 'px';
  //   let y = -(this.img.height - this.canvas.offsetHeight) / 2 + 'px';
  //   console.log(x, '$$$$');
  //   console.log(y, '$$$$');
  //   // scaling....
  //   this.ratio = this.canvas.offsetWidth / this.img.width;
  //   console.log(this.ratio, '$$$$');

  //   this.img.style.transform = `translate(${x}, ${y}) scale(${this.ratio})`;
  // }
}
