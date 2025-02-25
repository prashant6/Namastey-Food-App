import React from "react";
// import FilterSlider from "./FilterSlider";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const FiltersPage = ({
  marks,
  handleChange,
  valuetext,
  value,
  HighestPriceValue,
  priceFilter,
  labelNamesArray,
  handleInputChange,
  textFieldValue,
  handleSearchChange,
  setTextFieldValue,
  handleTopRestaurants,
  topRated,
  Err
}) => {
  const darkMode = useSelector((store) => store.cart?.dark)
  const buttonClassDark = `
  bg-black text-black w-36 border-solid border-white hover: bg-gray-100
  `

  return (
    <div>
      <div className="flex flex-wrap m-4 p-2 gap-3 items-center">
        {/* <FilterSlider
          marks={marks}
          handleChange={handleChange}
          valuetext={valuetext}
          value={value}
          HighestPriceValue={HighestPriceValue}
          priceFilter={priceFilter}
        /> */}
        <FilterDropdown
          labelNamesArray={labelNamesArray}
          handleInputChange={handleInputChange}
        />
        <SearchBar
          textFieldValue={textFieldValue}
          handleSearch={handleSearchChange}
          setTextFieldValue={setTextFieldValue}
          Err={Err}

        />
        <button
          className={` w-36 rounded-md p-2 transition-all duration-300 ${darkMode ? buttonClassDark : ' bg-gray-400'}`}
          onClick={handleTopRestaurants}
        >
          {topRated ? <p>View all</p> : <p>View Top Rated</p>}
        </button>
      </div>
    </div>
  );
};

export default FiltersPage;
