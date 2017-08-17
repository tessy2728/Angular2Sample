import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import { Poster } from './Poster';

@Injectable()
export class PosterService {
    private posterURL = 'json/CONTENTLISTINGPAGE-PAGE1.json';
    constructor(private _http: Http){} 
    getPosterList(): Observable<Poster[]> {
        return this._http.get(this.posterURL) 
        .map((response: Response) => <Poster[]> response.json()) 
        .do(data => console.log(JSON.stringify(data)));
    }
}