import React from "react";
import BackButton from "./BackButton";

export default function CountryFullCard({ country, setCountry, countries }) {
  const findCountryName = (arrayCodes) => {
    const countryNames = arrayCodes.map((alpha3Code) => {
      return countries.map((country) => {
        if (country.alpha3Code === alpha3Code) {
          console.log(country.name);
          return country.name;
        }
      });
    });

    // Add a unique key
    let result = [];
    for (let i = 0; i < countryNames.length; i++) {
      result.push({ id: i, countryName: countryNames[i] });
    }
    return result;
  };
  return (
    <div className="max-h-fit">
      <div className="my-4">
        <BackButton setCountry={setCountry} />
      </div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex flex-col w-full md:w-1/2">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            className="h-1/2"
          />
        </div>
        <div className="countryDetails flex flex-col items-center mx-auto">
          <div>
            <p className="py-5 text-xl font-bold">{country.name}</p>
            <p className="py-2">
              <span className="font-semibold">Native Name:</span>{" "}
              {country.nativeName}
            </p>
            <p className="py-2">
              <span className="font-semibold">Population:</span>{" "}
              {country.population}
            </p>
            <p className="py-2">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="py-2">
              <span className="font-semibold">Sub Region:</span>{" "}
              {country.subregion}
            </p>
            <p className="mb-10 py-2">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
            <p className="py-2">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.topLevelDomain.join(", ")}
            </p>
            <p className="py-2">
              <span className="font-semibold">Currencies:</span>{" "}
              {country.currencies.map(({ name }) => name).join(", ")}
            </p>
            <p className="mb-10 py-2">
              <span className="font-semibold">Languages:</span>{" "}
              {country.languages.map(({ name }) => name).join(", ")}
            </p>
            <p className="py-2 mb-6">
              <span className="font-semibold">Border Countries:</span>{" "}
            </p>
            <div className="inline">
              {findCountryName(country.borders).map(({ id, countryName }) => (
                <div key={id} className="">
                  <button className="border countryButton">
                    <p className="countryName">{countryName}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
