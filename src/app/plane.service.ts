import { Injectable } from '@angular/core';
import { Plane } from './plane';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  private planesUrl = 'api/planes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }
  getPlanes(): Observable<Plane[]> {
    return this.http.get<Plane[]>(this.planesUrl).pipe(tap(_ => this.log('fetched planes')), catchError(this.handleError('getPlanes', [])))
  }
  getPlane(id: number): Observable<Plane> {
    const url = `${this.planesUrl}/${id}`;
    return this.http.get<Plane>(url).pipe(
      tap(_ => this.log(`fetched plane id=${id}`)),
      catchError(this.handleError<Plane>(`getplane id=${id}`))
    );
  }
  updatePlane(plane: Plane): Observable<any> {
    return this.http.put(this.planesUrl, plane, httpOptions).pipe(
      tap(_ => this.log(`updated plane id=${plane.id}`)),
      catchError(this.handleError<any>('updatedPLane'))
    );
  }

  addPlane(plane: Plane): Observable<Plane> {
    return this.http.post<Plane>(this.planesUrl, plane, httpOptions).pipe(
      tap((plane: Plane) => this.log(`added plane w/ id=${plane.id}`)),
      catchError(this.handleError<Plane>('addplane'))
    );
  }


  /** DELETE: delete the Plane from the server */
  deletePlane(plane: Plane | number): Observable<Plane> {
    const id = typeof plane === 'number' ? plane : plane.id;
    const url = `${this.planesUrl}/${id}`;

    return this.http.delete<Plane>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted plane id=${id}`)),
      catchError(this.handleError<Plane>('deletePlane'))
    );
  }
  private log(message: string) {
    this.messageService.add(`PlaneService: ${message}`);
  }

  searchPlanes(term: string): Observable<Plane[]> {
    if (!term.trim()) {
      // if not search term, return empty Plane array.
      return of([]);
    }
    return this.http.get<Plane[]>(`${this.planesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Planees matching "${term}"`)),
      catchError(this.handleError<Plane[]>('searchPlanes', []))
    );
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
