import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(public http:HttpClient) { }
  public url="http://localhost:8080/insert";
  public insertProducts(record:any):Observable<any>{
    return this.http.post(this.url,record);
  }
}
