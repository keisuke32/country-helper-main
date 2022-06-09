import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectSelectedCountry } from '../../../reducers/country.reducer';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country$ = this.store.select(selectSelectedCountry);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
