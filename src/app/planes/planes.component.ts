import { Component, OnInit } from '@angular/core';
import { Plane } from '../plane';

import {  PlaneService } from '../plane.service';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  selectedPlane: Plane;

  planes: Plane[];
  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.getPlanes();
  }
  getPlanes(): void {
    this.planes = this.planeService.getPLanes();
  }
  onSelect(plane: Plane):void {
    this.selectedPlane = plane;
  }

}
