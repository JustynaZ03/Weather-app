import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, getApiOptions } from "../../hooks/get-city/get-city";
import { City, TypeSearch } from "./../../types/types";
import "./search.scss";

export const Search = ({ onSearchChange }: { onSearchChange: any }) => {
  const [search, setSearch] = useState<TypeSearch[]>([]);

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    console.log(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue: string) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      getApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city: City) => {
            return {
              value: `${city?.latitude} ${city?.longitude}`,
              label: `${city?.name}, ${city?.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Search for city..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};
