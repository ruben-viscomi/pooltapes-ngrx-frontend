import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { FavoritesService } from 'src/app/services/backend/user-generated';

@Injectable({
  providedIn: 'root'
})
export class FavoritesResolver implements Resolve<boolean> {

  constructor(private readonly favoritesService: FavoritesService) {}

  // TODO: replace any with proper interface
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.favoritesService.get();
  }
}
