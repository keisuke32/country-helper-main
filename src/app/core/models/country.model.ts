export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

// Note: There are many other properties, but just adding important fields only
export interface Country {
  alpha2Code: string; // This will be used as ID
  name: string;
  capital: string;
  currencies: Currency[];
  population: number;
  flag: string; // URL
}
