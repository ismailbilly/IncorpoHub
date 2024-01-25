"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryFields = void 0;
function getCountryFields(country) {
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
exports.getCountryFields = getCountryFields;
