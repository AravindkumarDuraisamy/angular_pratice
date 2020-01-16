import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
constructor( private http:HttpClient){}
    
    getAllData():Observable<any>
    {
        return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    }
}