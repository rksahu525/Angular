import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {FetchService} from '../services/fetch.service';
import{InsertService}from '../services/insert.service';
import{UpdateService} from '../services/update.service';
import {DeleteService} from '../services/delete.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
          public records:any;
  constructor(public fetch:FetchService,
              public insert:InsertService,
              public update:UpdateService,
              public remove:DeleteService) { }
            
            public errorCallback=(err:HttpErrorResponse)=>{
              if(err.error instanceof Error){
                console.log("Client Side Error.....")
              }
              else{
                console.log("Server Side Error....")
              }
            };
  ngOnInit(): void {
    this.fetch.getProducts().subscribe((posRes)=>{
      this.records=posRes;
    },this.errorCallback)
  }
     public OpenModalBox(msg){
       console.log(msg);
       if(msg==='insert'){
        $("#myModal").modal("show");
       }
     }

}
