import { Component } from "@angular/core";
import { FetchService } from "../services/fetch.service";
import { InsertService } from "../services/insert.service";
import { UpdateService } from "../services/update.service";
import { DeleteService } from "../services/delete.service";
import { HttpErrorResponse } from "@angular/common/http";
declare var $:any;

@Component({
  selector : "crud",
  templateUrl : "./crud.component.html"
})
export class CrudComponent{
    public records:any;
    constructor(public _fetch:FetchService,
                public _insert:InsertService,
                public _update:UpdateService,
                public _remove:DeleteService){}
    
    public _errorCallBack = (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
            console.log("client side error");
        }else{
            console.log("server side error");
        }
    };


    ngOnInit(){
        this._fetch.getProducts().subscribe((posRes)=>{
            this.records = posRes;
        },this._errorCallBack);
    };

    


    openModelBox(msg){
        if(msg==="insert"){
            $("#myModal").modal("show");
        }
        if(msg==="update"){
            console.log("update operation soon....!");
        }
    };
    

    deleteRow(p_id){
         this._remove.deleteProduct({"p_id":p_id})
                     .subscribe((posRes)=>{
               if(posRes.delete === "success"){
                    let i = this.records.findIndex((element,index)=>{
                        return element.p_id == p_id;
                    });
                    this.records.splice(i,1);                  
               }
         },this._errorCallBack) ;    
    };

    save(){
        let obj={"p_id":$("#p_id").val(),
                 "p_name":$("#p_name").val(),
                 "p_cost":$("#p_cost").val()};
        this._insert.insertProduct(obj).subscribe((posRes)=>{
            if(posRes.insert === "success"){
               this.records.push(obj); 
            }
            $("#myModal").modal("hide");
        },this._errorCallBack);
    };

};