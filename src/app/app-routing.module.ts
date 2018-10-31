import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PlanesComponent} from './planes/planes.component'
const routes: Routes = [
  {path: 'planes', component: PlanesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
