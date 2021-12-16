import { catchError, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'

import { City } from './city'

@Injectable({
    providedIn: 'root',
})
export class CityService {
    private citiesUrl = 'https://my-json-server.typicode.com/iahmediibrahim/angular-cities-js/cities'

    constructor(private http: HttpClient) {}

    getJSON(): Observable<any> {
        return this.http
            .get(this.citiesUrl)
            .pipe(tap((data) => console.log(JSON.stringify(data))), catchError(this.handleError))
    }
    private handleError(err: any) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`
        }
        console.error(err)
        return throwError(errorMessage)
    }
}
