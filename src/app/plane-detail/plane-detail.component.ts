import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Plane } from '../plane';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'app-plane-detail',
  templateUrl: './plane-detail.component.html',
  styleUrls: ['./plane-detail.component.css']
})
export class PlaneDetailComponent implements OnInit {

  @Input() plane: Plane;
  constructor(
    private route: ActivatedRoute, 
    private planeService: PlaneService,
    private location: Location) { }

  ngOnInit() {
    this.getPlane();
  }
  getPlane(): void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.planeService.getPlane(id).subscribe(plane => this.plane = plane);
  }
  goBack(): void {
    this.location.back();
  }
}
