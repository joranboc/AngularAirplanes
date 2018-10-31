import { Component, OnInit } from '@angular/core';
import { Plane } from '../plane';

import {  PlaneService } from '../plane.service';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {


  planes: Plane[];
  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.getPlanes();
  }
  getPlanes(): void {
    this.planeService.getPlanes().subscribe(planes => this.planes = planes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.planeService.addPlane({ name } as Plane)
      .subscribe(plane => {
        this.planes.push(plane);
      });
  }
  delete(plane: Plane): void {
    this.planes = this.planes.filter(p => p !== plane);
    this.planeService.deletePlane(plane).subscribe();
  }

}
