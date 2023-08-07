import "./App.css";
import CountryCard from "./components/CountryCard";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CountryFullCard from "../components/CountryFullCard";
import CountriesData from "./assets/data.json";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(CountriesData);
  const [country, setCountry] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Country filter
  const searchByCountry = (countryName) => {
    const searchedCountry = CountriesData.find(
      (country) => country.name === countryName
    );
    setCountry(searchedCountry);
  };

  const filterByTyping = (data, input) => {
    if (input !== "") {
      let filter = [];
      data.map((country) => {
        if (country.name.toLowerCase().startsWith(input.toLowerCase())) {
          filter.push(country);
        }
      });
      setCountries(filter);
      // console.log(filter);
    }
  };

  const searchByRegion = (regionName, input) => {
    if (regionName === "Filter by Region") {
      if (!input) {
        setCountries(CountriesData); // Reset to all countries
      } else {
        filterByTyping(CountriesData, input);
      }
    } else {
      const filteredCountries = CountriesData.filter(
        (country) => country.region.toLowerCase() === regionName.toLowerCase()
      );
      if (!input) {
        setCountries(filteredCountries);
      } else {
        filterByTyping(filteredCountries, input.toLowerCase());
      }
    }
  };

  return (
    <div
      className={`font-nunito ${
        darkMode ? "bg-[#202C37] text-white" : "bg-white text-black"
      }`}
    >
      <div className={`${darkMode && "bg-[#2B3945]"}`}>
        <Navbar setDarkMode={setDarkMode} />
      </div>
      {country ? (
        <div className="md:mx-12 mx-4 mb-10">
          <CountryFullCard
            country={country}
            setCountry={setCountry}
            countries={CountriesData}
            searchByCountry={searchByCountry}
          />
        </div>
      ) : (
        <div className="md:mx-12 mx-4 mb-10">
          <Search
            searchByRegion={searchByRegion}
            searchByCountry={searchByCountry}
            darkMode={darkMode}
          />
          <CountryCard
            countries={countries}
            darkMode={darkMode}
            searchByCountry={searchByCountry}
          />
        </div>
      )}
    </div>
  );
}

export default App;
