import { MouseEventHandler } from "react";

export interface CustomButtonsProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface OptionProps{
  title:string;
  value:string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[],
  setFilter: (filter:any)=>void
}
export interface SearchManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps{
  manufacturer: string,
  year: number,
  fuel: string,
  limit: number,
  model: string,
}

export interface ShowMoreProps {
  isNext : boolean,
  pageNumber: number,
  setLimit:(limit: number) => void
}

export interface SearchBarProps {
  setManufacturer:(manufacturer: string) => void
  setModel:(model: string) => void
}