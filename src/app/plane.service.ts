import { Injectable } from '@angular/core';
import { Plane } from './plane';
import { PLANES } from './mock-PLANES';
@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }
  getPLanes(): Plane[]{
    return PLANES;
  }
}
