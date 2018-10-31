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


}
