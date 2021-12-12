import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { City } from './city';

@Injectable({
    providedIn: 'root',
})
export class CityService {
    private citiesUrl = 'https://my-json-server.typicode.com/iahmediibrahim/angular-cities-js/cities';

    constructor(private http: HttpClient) {}

    getJSON(): Observable<any> {
        return this.http.get(this.citiesUrl);
    }
}
