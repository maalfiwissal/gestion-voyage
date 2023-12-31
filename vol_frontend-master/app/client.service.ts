import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/clts";

  getClientList() : Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}/list`);
  }

  deleteClient(id:number | undefined) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/id/${id}`);
    }

    createClient(client : Client): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}/create`, client);
    }
    updateClientl(id:number|undefined, client : Client): Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/id/${id}`,client);
      }

      getClientById(id : number |undefined): Observable<Client>{
        return this.httpClient.get<Client>(`${this.baseUrl}/id/${id}`)
        }
}
