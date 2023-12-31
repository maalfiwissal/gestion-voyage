import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vol } from './vol';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  constructor(private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080/vols";

  getVolList() : Observable<Vol[]>{
    return this.httpClient.get<Vol[]>(`${this.baseUrl}/list`);
  }

  createVol(vol : Vol): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create`, vol);
  }
  getVolById(id : number |undefined): Observable<Vol>{
    return this.httpClient.get<Vol>(`${this.baseUrl}/id/${id}`)
    }

    deleteVol(id:number | undefined) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/id/${id}`);
      }
}
