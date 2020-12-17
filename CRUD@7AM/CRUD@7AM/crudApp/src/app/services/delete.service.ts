import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(public http:HttpClient) { }
  public deleteProduct(obj:any):Observable<any>{
      const options = {
        headers:{},
        body:obj
      }
      return this.http.delete("http://localhost:8080/delete",options);
  };
}
