import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { CountryService } from '../core/services/country.service';
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from '../actions/country.actions';

@Injectable()
export class CountryEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      exhaustMap((action) => {
        return this.countryService.loadCountries(action.region).pipe(
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) => of(loadCountriesFailure({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions, private countryService: CountryService) {}
}
