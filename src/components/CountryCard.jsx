import React from "react";
import { useEffect } from "react";

export default function CountryCard({ countries, darkMode, searchByCountry }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-8">
      {countries.map((country) => (
        <div
          key={country.name}
          className={`border mt-4 rounded-md mx-10 ${
            darkMode && "bg-[#2B3945]"
          }`}
          onClick={() => searchByCountry(country.name)}
        >
          <div>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
              className="w-full h-[130px] rounded-t-md"
            />
          </div>
          <div className="mx-8 mb-10">
            <p className="py-5 text-xl font-bold">{country.name}</p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {country.population}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
