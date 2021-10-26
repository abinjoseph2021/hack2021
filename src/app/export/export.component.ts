import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {NgxPrintModule} from 'ngx-print';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular-app';
  fileName= 'Iconic Villains.xlsx';
  userList = [
  {
    "id": 1,
    "Villain": "Mohan Thomas",
    "Actor": "Ratheesh",
    "Movie": "Commissioner",
    "Director": "Renji Panicker ",
    "Year" : "1994"
    },
    
    {
    "id": 2,
    "Villain": "Mundakkal Shekaran",
    "Actor": "Napoleon",
    "Movie": "Devasuram",
    "Director": "I V Sasi",
    "Year" : "1993"
    },
    
    {
    "id": 3,
    "Villain": "Keerikadan Jose",
    "Actor": "Mohan Raj",
    "Movie": "Kireedam",
    "Director": "Lohithadas",
    "Year" : "1989"
    },
    
    {
    "id": 4,
    "Villain": " Bhaskara Patelar",
    "Actor": "Mammootty",
    "Movie": "Vidheyan",
    "Director": "Adoor Gopalakrishnan",
    "Year" : "1990"
    },
    
    {
    "id": 5,
    "Villain": "P K Jayarajan",
    "Actor": "Mohanlal",
    "Movie": "Uyarangalil",
    "Director": "I V Sasi",
    "Year" : "1984"
    }
  ]
  excelexport(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
  }
}
