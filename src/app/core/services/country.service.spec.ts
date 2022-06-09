import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CountryService } from './country.service';
import { Region } from '../models/region.model';
import { asiaCountries } from '../mocks/countries-asia.mock';

describe('CountryService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CountryService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call valid API when search countries in Asia', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(asiaCountries));

    service.loadCountries(Region.Asia).subscribe({
      next: (countries) => {
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledOnceWith('https://restcountries.com/v2/region/asia');
  });

  it('should call valid API when search countries in Europe', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(asiaCountries));

    service.loadCountries(Region.Europe).subscribe({
      next: (countries) => {
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get).toHaveBeenCalledOnceWith('https://restcountries.com/v2/region/europe');
  });
});
