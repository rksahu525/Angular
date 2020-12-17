import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import{Employee} from "../employee";



@Component({
  selector: 'app-table2ex',
  templateUrl: './table2ex.component.html',
  styleUrls: ['./table2ex.component.css']
})
export class Table2exComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true})
  public NormalData:Employee[]=[
    {"empNo":111,"name":"ajay","gender":"male","mobileNo":7008566852,"email":"rksahu525@gmail.com","salary":250000},
    {"empNo":121,"name":"manas","gender":"male","mobileNo":8008566852,"email":"gtjh@gmail.com","salary":350000},
    {"empNo":131,"name":"tapas","gender":"male","mobileNo":7008588852,"email":"loki12@gmail.com","salary":400000},
    {"empNo":914,"name":"raja","gender":"male","mobileNo":9408566852,"email":"namita25@gmail.com","salary":270000},
    {"empNo":416,"name":"mani","gender":"female","mobileNo":8008566852,"email":"jamu36@gmail.com","salary":390000},
    {"empNo":191,"name":"Suman","gender":"female","mobileNo":7008565682,"email":"lali78@gmail.com","salary":210000},
    {"empNo":271,"name":"enzalin","gender":"female","mobileNo":7008879652,"email":"lipu58@gmail.com","salary":520000},
    {"empNo":311,"name":"rocky","gender":"male","mobileNo":7208566852,"email":"manat589@gmail.com","salary":970000}

  ];
  public data:MatTableDataSource<any>;
  public displayedColumn:string[]=[
    "empNo","name","gender","mobileNo","email","salary"
  ];
  public paginator:MatPaginator;

  constructor() { 
    this.data=new MatTableDataSource(this.NormalData);
  }

  ngOnInit(): void {
    this.data.paginator=this.paginator;
  }

}
