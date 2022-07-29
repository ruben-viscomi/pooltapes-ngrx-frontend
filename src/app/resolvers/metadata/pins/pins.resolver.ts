import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { PinnedService } from 'src/app/services/backend/metadata';

@Injectable({
  providedIn: 'root'
})
export class PinsResolver implements Resolve<boolean> {

  constructor(private readonly pinnedService: PinnedService) {}

  // TODO: replace any with proper interface
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.pinnedService.get(route.url[0].path);
  }

}
