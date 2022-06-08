import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { loadCountries, selectCountry } from './actions/country.actions';
import { selectRegions } from './reducers/region.reducer';
import { selectCountries, selectIsLoading, selectSelectedCountry } from './reducers/country.reducer';
import { Region } from './core/models/region.model';
import { Country } from './core/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  regions$ = this.store
    .select(selectRegions)
    .pipe(
      map((regions) =>
        regions.map((region) => ({ label: this.titleCasePipe.transform(region), value: region, data: region }))
      )
    );
  countries$ = this.store
    .select(selectCountries)
    .pipe(
      map((countries) =>
        countries.map((country) => ({ label: country.name, value: country.alpha2Code, data: country }))
      )
    );
  isLoading$ = this.store.select(selectIsLoading);
  country$ = this.store.select(selectSelectedCountry);

  constructor(private store: Store, private titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {
    this.store.select(selectRegions);
  }

  onSelectRegion(region: Region): void {
    this.store.dispatch(loadCountries({ region }));
  }

  onSelectCountry(country: Country): void {
    this.store.dispatch(selectCountry({ country }));
  }
}
