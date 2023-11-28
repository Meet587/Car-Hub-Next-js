"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={'magnifying-glass.svg'}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("")
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (manufacturer === '' && model === '') {
      return alert("Please fill in search bar")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchParams = (modal: string, manufacturer: string) => {
    const searchparams = new URLSearchParams(window.location.search)

    if (model) {
      searchparams.set('model', model)
    } else {
      searchparams.delete('model')
    }
    if (manufacturer) {
      searchparams.set('manufacturer', manufacturer)
    } else {
      searchparams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchparams.toString()}`

    router.push(newPathName)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={'/model-icon.png'}
          alt="model icon"
          className="absolute w-[20px] h-[20px] ml-4"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
