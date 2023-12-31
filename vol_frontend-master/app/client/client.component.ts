import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  client : Client = new Client();
  clients : Client[] | undefined;
  constructor(private clientService : ClientService, private router : Router){}

  private getClients(){
    this.clientService.getClientList().subscribe(data => {
    this.clients = data;
    });
  }

  ngOnInit(): void {
    this.getClients();
  }

  createClient(){
    this.clientService.createClient(this.client).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
    }
    ngSubmit(){
      this.createClient();
    }

    deleteClient(id : number|undefined){
      this.clientService.deleteClient(id).subscribe(data =>{
        console.log(data);
        window.location.reload();
      });
    }

    updateClient(id : number | undefined){
      this.router.navigate(['update-client', id]);
        }
}
