import { Component, OnInit } from '@angular/core';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';
import { Vol } from '../vol';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit{

  constructor(private volService : VolService, private router : Router){}
  vol : Vol = new Vol();
  vols : Vol[] | undefined;

  private getVols(){
    this.volService.getVolList().subscribe(data => {
    this.vols = data;
    });
  }

  ngOnInit(): void {
    this.getVols();
  }
  createVol(){
    this.volService.createVol(this.vol).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
    }
    ngSubmit(){
      this.createVol();
    }

    deleteVol(id : number|undefined){
      this.volService.deleteVol(id).subscribe(data =>{
        console.log(data);
        window.location.reload();
      });
    }

}
