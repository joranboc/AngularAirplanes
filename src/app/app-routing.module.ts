import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesComponent } from './planes/planes.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaneDetailComponent } from './plane-detail/plane-detail.component';
const routes: Routes = [
  { path: 'planes', component: PlanesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PlaneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
