"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
    </form>
  );
};

export default SearchBar;
