import * as fromCountry from './country.actions';
import { Region } from '../core/models/region.model';

describe('loadCountrys', () => {
  it('should return an action', () => {
    expect(fromCountry.loadCountries({ region: Region.Asia }).type).toBe('[Country] Load Countrys');
  });
});
