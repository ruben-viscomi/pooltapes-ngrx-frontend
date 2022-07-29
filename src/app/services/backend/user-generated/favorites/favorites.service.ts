import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private readonly http: HttpClient) {}

  // TODO: replace any with proper interface
  get(): Observable<any> {
    return this.http.get<any>('http://localhost:3020/favorites', { withCredentials: true });
  }

}
