import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../../shared/shared.module';

import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountrySearchComponent } from './country-search/country-search.component';

@NgModule({
  declarations: [CountryDetailsComponent, CountrySearchComponent],
  imports: [CommonModule, MatCardModule, SharedModule],
  exports: [CountryDetailsComponent, CountrySearchComponent],
  providers: [TitleCasePipe],
})
export class CountryModule {}
