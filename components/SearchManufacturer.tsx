"use client";
import React from "react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [qurey, setQurey] = useState("");
  const filterdManufacturer =
    qurey === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(qurey.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div>
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              className="ml-4"
              alt="car logo"
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQurey(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in  duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQurey("")}
          >
            <Combobox.Options>
              {filterdManufacturer.length === 0 && qurey !== "" && (
                <Combobox.Option
                  value={qurey}
                  className="search-manufacturer__option"
                >
                  Create "{qurey}"
                </Combobox.Option>
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
