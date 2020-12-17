import { Component } from '@angular/core';

import{Products} from "../Product";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table-ex',
  templateUrl: './table-ex.component.html',
  styleUrls: ['./table-ex.component.css']
})
export class TableEXComponent {
public displayedColumn:string[]=["p_id","p_name","p_cost"]
public arr:Products[]=[
  {"p_id":111,"p_name":"P_ONE","p_cost":1000},
  {"p_id":222,"p_name":"P_TWO","p_cost":2000},
  {"p_id":333,"p_name":"P_THREE","p_cost":3000},
  {"p_id":444,"p_name":"P_FOUR","p_cost":4000},
  {"p_id":555,"p_name":"P_FIVE","p_cost":5000}

];
public data:MatTableDataSource<any>;
constructor(){
  this.data=new MatTableDataSource(this.arr);
}

}
