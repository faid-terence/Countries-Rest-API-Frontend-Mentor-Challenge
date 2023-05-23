import React, { useState, useEffect } from "react";
import { apiURL } from "../utils/api";
import SearchInput from "../Search/SearchInput";
import { FilterCountry } from "../FilterCountry/FilterCountry";
import { Link } from "react-router-dom";

export const AllCountires = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}`);
      const data = await response.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  const getCountryByName = async (name) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  const getCountryByRegion = async (region) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>
        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>
      <div className="country__bottom">
        {isLoading && !error && <h4>Loading................</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="country__card">
              <div className="country__img">
                <img src={country.flags.png} alt="" />
              </div>
              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>Populaion :{country.population}</h6>
                <h6>Region : {country.region}</h6>
                <h6>Capital City: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
