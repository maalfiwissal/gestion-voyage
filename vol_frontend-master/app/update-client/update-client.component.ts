import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit{

  client : Client = new Client();
  id : number|undefined;
  constructor(private clientService : ClientService,private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  this.clientService.getClientById(this.id).subscribe(data =>{
    this.client = data;
  });
  }
  goToCatgorieHome(){
    this.router.navigate(['/clients']);
      }
  onSubmit(){
    this.clientService.updateClientl(this.id, this.client).subscribe(data =>{
      this.goToCatgorieHome();
    });
  }


}
