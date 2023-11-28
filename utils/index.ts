import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, year, fuel, limit, model} = filters
  const headers = {
    "X-RapidAPI-Key": "5e61013454mshb148b036b0205b4p140a4bjsn46012db09a73",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const responce = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers: headers,
    }
  );

  const result = await responce.json();

  return result;
}

export const calculateCarRent  = (city_mpg:number, year:number) =>{
  const basePricePerDay = 50
  const mileageFactor = 0.1
  const ageFactor = 0.05

  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = mileageRate + ageRate + basePricePerDay

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car:CarProps, angle?:string) =>{
  const url = new URL('https://cdn.imagin.studio/getimage')

  const {make, year, model} = car

  url.searchParams.append('customer', 'hrjavascript-mastery' )
  url.searchParams.append('make', make )
  url.searchParams.append('modelFamily', model.split(' ')[0] )
  url.searchParams.append('zoomType', 'fullscreen' )
  url.searchParams.append('modelYear', `${year}` )
  url.searchParams.append('angle', `${angle}` )

  return `${url}` 
}

export const updateSearchParams = (type: string, value: string)=>{
  const searchparams = new URLSearchParams(window.location.search)

  searchparams.set(type, value)

const newPathName = `${window.location.pathname}?${searchparams.toString()}`

return newPathName
}