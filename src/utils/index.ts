import { Country } from '../types'

export function getCountryFields(country: Country): string[] {
  // Convert to uppercase
  const uppercaseCountry = country.toUpperCase();
  switch (uppercaseCountry) {
    case "USA":
      return ["county"];

    case "UK":
      return ["postalCode"];

    case "NIGERIA":
      return ["ward"];

    default:
      return [];
  }
}
