import { Injectable } from '@angular/core';
import { SENTENCES } from './mock-sentences';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Hero } from './hero';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError} from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class ListService {

  private heroesUrl = 'api/lists';  // URL to web api

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the database */
  queryHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError('queryHero',hero)));
  }

// getData(){
//   this.http.post(this.url).subscribe(res =>{
//     this.data = res;
//   })
// }

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  // getList() : Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Hero[]>('getHeroes', []))
  //     );
  // }

  

}
