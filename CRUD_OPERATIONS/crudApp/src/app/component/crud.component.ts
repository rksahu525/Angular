import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { DeleteService } from '../services/delete.service';
import { HttpErrorResponse } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
     public records:any;
  constructor( public fetch:FetchService, public insert:InsertService, public update:UpdateService, public remove:DeleteService) { }
     public errorCallback=(err:HttpErrorResponse)=>{
       if(err.error instanceof Error){
         console.log("Clientside error...")
       }
       else{
         console.log("ServerSide Error.....")
       }
     }
  ngOnInit(): void {
    this.fetch.getProducts().subscribe((posRes)=>{this.records=posRes},this.errorCallback)
  }

  openModelBox(msg){
    if(msg==="insert"){
        $("#myModal").modal("show");
    }
    if(msg==="update"){
        console.log("update operation soon....!");
    }
   };


     
    deleteRaw(p_id){
      this.remove.removeProduct({"p_id":p_id})
                  .subscribe((posRes)=>{
            if(posRes.delete === "success"){
                 let i = this.records.findIndex((element,index)=>{
                     return element.p_id == p_id;
                 });
                 this.records.splice(i,1);                  
            }
      },this.errorCallback) ;    
 };
 save(){
  let obj={"p_id":$("#p_id").val(),
           "p_name":$("#p_name").val(),
           "p_cost":$("#p_cost").val()};
  this.insert.insertProduct(obj).subscribe((posRes)=>{
      if(posRes.insert === "success"){
         this.records.push(obj); 
      }
      $("#myModal").modal("hide");
  },this.errorCallback);
};
      
};
