import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CountryEffects } from './country.effects';

describe('CountryEffects', () => {
  let actions$: Observable<any>;
  let effects: CountryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CountryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
