import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(public http:HttpClient) { }
  public url="http://localhost:8080/delete";
  public deleteProducts(record:any):Observable<any>{
    return this.http.delete(this.url,record)
  }
}
