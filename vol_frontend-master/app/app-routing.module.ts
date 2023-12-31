import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { VolComponent } from './vol/vol.component';

const routes: Routes = [
  {path : "clients", component : ClientComponent},
  {path : "vols", component : VolComponent},
  {path : "update-client/:id", component : UpdateClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
