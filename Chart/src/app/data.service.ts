import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// to send data to form 
public productDetails:BehaviorSubject<any>=new BehaviorSubject("")


constructor(private http: HttpClient) {

}

FetchData(): Observable<any> {
  return this.http.get("http://localhost:3000/products");
}

DeleteData(data: Products): Observable<any> {
  return this.http.delete( "http://localhost:3000/products/"+data.id)
}

AddData(data:Products){
  return this.http.post("http://localhost:3000/products/",data)
}

UpdateData(data:Products){
  return this.http.put("http://localhost:3000/products/"+data.id,data)
}
}
