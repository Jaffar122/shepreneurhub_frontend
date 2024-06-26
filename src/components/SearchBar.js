import React from "react";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  LocationDropdown,
  LocationWrapper,
  IconWrapper,
} from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <SearchContainer>
      <LocationWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </IconWrapper>
        <LocationDropdown>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </LocationDropdown>
      </LocationWrapper>
      <SearchInput type="text" placeholder="Search for Spa & Salons" />
      <SearchButton>🔍</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
