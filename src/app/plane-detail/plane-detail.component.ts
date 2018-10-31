import { Component, OnInit,Input } from '@angular/core';
import {Plane} from '../plane';

@Component({
  selector: 'app-plane-detail',
  templateUrl: './plane-detail.component.html',
  styleUrls: ['./plane-detail.component.css']
})
export class PlaneDetailComponent implements OnInit {

  @Input() plane: Plane;
  constructor() { }

  ngOnInit() {
  }

}
