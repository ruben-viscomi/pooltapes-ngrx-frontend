import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from 'src/app/services/backend/metadata';
import { Dash } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve<boolean> {

  constructor(private readonly categoriesService: CategoriesService) {}

  // TODO: replace any with proper interface
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const dash: string = route.url[0].path;
    const dashType: Dash = dash === 'home' ? Dash.HOME : Dash.CATEGORY;
    var query = { dash: dashType };
    if (dashType === Dash.CATEGORY)
      Object.assign(query, { movie: dash === 'movies' });
    return this.categoriesService.get(query);
  }

}
