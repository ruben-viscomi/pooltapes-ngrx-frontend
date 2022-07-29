import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dash } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  get(query?: any): Observable<any> {
    if (query === undefined)
      return this.http.get<any>('http://localhost:3000/categories', { withCredentials: true });

    var queryParams: HttpParams = new HttpParams();
    for(let key of Object.keys(query))
      queryParams = queryParams.append(key, query[key]);

    return this.http.get<any>('http://localhost:3000/categories', { params: queryParams, withCredentials: true });
  }

}
