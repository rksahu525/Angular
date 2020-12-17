import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public http:HttpClient) { }
  public url="http://localhost:8080/update";
  public updateProducts(record:any):Observable<any>{
    return this.http.put(this.url,record);
  }
}
