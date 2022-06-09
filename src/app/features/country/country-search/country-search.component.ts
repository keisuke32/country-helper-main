import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { Country } from '../../../core/models/country.model';
import { Region } from '../../../core/models/region.model';
import { loadCountries, selectCountry } from '../../../actions/country.actions';
import { selectRegions } from '../../../reducers/region.reducer';
import { selectCountries } from '../../../reducers/country.reducer';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss'],
})
export class CountrySearchComponent implements OnInit {
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

  constructor(private store: Store, private titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {}

  onSelectRegion(region: Region): void {
    this.store.dispatch(loadCountries({ region }));
  }

  onSelectCountry(country: Country): void {
    this.store.dispatch(selectCountry({ country }));
  }
}
