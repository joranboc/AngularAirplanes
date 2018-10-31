import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Plane } from '../plane';
import { PlaneService } from '../plane.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plane-search',
  templateUrl: './plane-search.component.html',
  styleUrls: ['./plane-search.component.css']
})
export class PlaneSearchComponent implements OnInit {
  planes$: Observable<Plane[]>;
  private searchTerms = new Subject<string>();
  constructor(private planeService: PlaneService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.planes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.planeService.searchPlanes(term))
    )
  }

}
