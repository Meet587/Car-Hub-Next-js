export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5e61013454mshb148b036b0205b4p140a4bjsn46012db09a73",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const responce = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
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