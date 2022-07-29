import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, zip, map } from 'rxjs';

import { CategoriesService, PinnedService } from 'src/app/services/backend/metadata';
import { Dash } from 'src/app/enums';

@Injectable({
  providedIn: 'root'
})
export class DashResolver implements Resolve<boolean> {

  constructor(private readonly categoriesService: CategoriesService,
              private readonly pinnedService: PinnedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const dash: string = route.url[0].path;
    const dashType: Dash = dash === 'home' ? Dash.HOME : Dash.CATEGORY;
    var query = { dash: dashType };
    if (dashType === Dash.CATEGORY)
      Object.assign(query, { movie: dash === 'movies' });
    const categories$: Observable<any> = this.categoriesService.get(query);
    const pins$: Observable<any> = this.pinnedService.get(dash);

    return zip(categories$, pins$).pipe(
      map(data => ({ categories: data[0], pins: data[1] }))
    );

    // return of(true);
  }

}
