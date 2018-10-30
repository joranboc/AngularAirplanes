import { Component, OnInit } from '@angular/core';
import { Plane } from '../plane';
import {PLANES} from '../mock-planes'

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  selectedPlane: Plane;

  planes = PLANES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(plane: Plane):void {
    this.selectedPlane = plane;
  }

}
