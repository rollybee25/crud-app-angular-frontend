import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  // data from backend
  apiUrl = 'http://localhost:3000/client';

  // get all client details
  getAllData():Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //delete data
  deleteData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update data
  updateData(data:any, id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  //get single data
  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}
