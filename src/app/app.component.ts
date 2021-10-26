import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TablePopupComponent } from './table-popup/table-popup.component';
import { PiechartPopupComponent } from './piechart-popup/piechart-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment';
  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(TablePopupComponent,{
      data : {}
    });
  }

  openDialog2(){
    this.dialogRef.open(PiechartPopupComponent,{
      data : {}
    });
  }

  mytodos = [
    {
      item:'need to buy movie tickets',
      isCompleted:false
    },
    {
      item:'Gardening tomorrow 9:00AM',
      isCompleted:false
    },
    {
      item:'Car Washing',
      isCompleted:true
    },
    {
      item:'Buy a pen',
      isCompleted:false
    }
  ]
}
