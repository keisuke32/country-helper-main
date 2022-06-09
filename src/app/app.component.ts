import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectRegions } from './reducers/region.reducer';
import { selectIsLoading } from './reducers/country.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
