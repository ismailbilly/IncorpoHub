export type Country = "USA" | "UK" | "NIGERIA";
export type GenericObject = Record<string, unknown>;

export interface CountrySpecificInfo {
  //uk
  postalCode?: string;
  //usa
  county?: string;
  //nigeria
  ward?: string;
}
export interface ICompany extends CountrySpecificInfo {
  id: string;
//   firstName: string;
//   middleName: string;
//   lastName: string;
  companyName: string;
  country: Country;
  address: string;
 
}