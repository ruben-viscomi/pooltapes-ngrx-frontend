import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinnedService {

  constructor(private readonly http: HttpClient) {}

  get(dash: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/pinned/${dash}`, { withCredentials: true });
  }

}
