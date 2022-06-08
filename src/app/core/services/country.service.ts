import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Region } from '../models/region.model';
import { Country } from '../models/country.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  loadCountries(region: Region): Observable<Country[]> {
    const url = `${environment.api}/${region}`;
    return this.http.get<Country[]>(url);
  }
}
