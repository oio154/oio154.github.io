import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';


export interface versionDataI{
  data: string
}


@Injectable({
  providedIn: 'root'
})





export class VersionService {

  constructor(private http: HttpClient) { }

  public getVersion(): Observable<versionDataI>{
    // const version = {data: (new Date()).toISOString()};
    // return of(version);

    return this.http.get<versionDataI>('data/version.json');
  }
}
