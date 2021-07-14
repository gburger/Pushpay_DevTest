import React from "react";

interface props {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<props> = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a person..."
      onChange={handleSearch}
      data-testid="input"
    />
  );
};

export default SearchBar;
