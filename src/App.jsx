import "./App.css";
import CountryCard from "./components/CountryCard";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CountryFullCard from "../components/CountryFullCard";
import CountriesData from "./assets/data.json";
import { useState } from "react";

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

  const searchByRegion = (regionName) => {
    if (regionName === "Filter by Region") {
      setCountries(CountriesData); // Reset to all countries
    } else {
      const filteredCountries = CountriesData.filter(
        (country) => country.region === regionName
      );
      setCountries(filteredCountries);
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
            countries={countries}
          />
        </div>
      ) : (
        <div className="md:mx-12 mx-4 mb-10">
          <Search
            searchByRegion={searchByRegion}
            searchByCountry={searchByCountry}
            darkMode={darkMode}
          />
          <CountryCard countries={countries} darkMode={darkMode} />
        </div>
      )}
    </div>
  );
}

export default App;
