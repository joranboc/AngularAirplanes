import { Injectable } from '@angular/core';
import { Plane } from './plane';
import { PLANES } from './mock-PLANES';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private messageService: MessageService) { }
  getPlanes(): Observable<Plane[]>{
    this.messageService.add('PlaneService: fetched planes');
    return of(PLANES);
  }
  getPlane(id: number): Observable<Plane>{
    this.messageService.add(`PlaneService: fetched plane id=${id}`);
    return of(PLANES.find(plane => plane.id === id))
  }
}
