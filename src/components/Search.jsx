import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";

const Regions = [
  // { name: "Filter by Region" },
  { name: "Africa" },
  { name: "Americas" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

const capitalize = (str) => {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function Search({ searchByCountry, searchByRegion, darkMode }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region");

  const handleSearch = (e) => {
    setSearchInput(capitalize(e.target.value));
  };

  const handleSelect = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSubmit = () => {
    searchByCountry(searchInput);
  };

  useEffect(() => {
    // console.log(selectedFilter);
    searchByCountry(searchInput);
    searchByRegion(selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="md:flex items-center justify-between">
      <div
        className={`flex item-center md:w-1/2 justify-center my-8 border rounded-md ${
          darkMode ? "bg-[#2B3945] text-white border-[#2B3945]" : "text-black"
        }`}
      >
        <MdOutlineSearch
          size={30}
          className={`my-3 mx-6 text-gray-400 ${darkMode && "text-white"}`}
          onClick={handleSubmit}
        />
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search for a country..."
          className={`w-full mx-auto py-4 px-2 focus:outline-none ${
            darkMode
              ? "bg-[#2B3945] text-white placeholder-white"
              : "text-black"
          }`}
        />
      </div>
      <div className="md:w-1/5">
        <select
          name="filter"
          id="filter"
          value={selectedFilter}
          className={`border rounded-md py-4 px-4 w-2/3 md:w-full focus:outline-none ${
            darkMode ? "text-white bg-[#2B3945] border-[#2B3945]" : "text-black"
          }`}
          onChange={handleSelect}
        >
          <option
            value="Filter by Region"
            disabled
            className={`${darkMode && "bg-[#2B3945] text-white"} hidden`}
          >
            Filter by Region
          </option>
          {Regions.map((region) => (
            <optgroup key={region.name}>
              <option
                value={region.name}
                className={`${darkMode && "bg-[#2B3945] text-white"}`}
              >
                {region.name === "Americas" ? "America" : region.name}
              </option>
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}
