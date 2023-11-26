'use client'

import { CarProps } from "@/types"
import { calculateCarRent } from "@/utils"
import Image from "next/image"
import CustomButtons from './CustomButtons';
import { useState } from 'react';
import { CarDetails } from ".";

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car
  const[isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className='self-start text-[14px] font-semibold'>$
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day </span>
      </p>
      <div className='relative w-full h-40 object-contain my-3'>
        <Image src='/hero.png' alt='car model' fill priority className='object-contain' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image alt={'wheel'} src={'/steering-wheel.svg'} width={20} height={20} />
            <p className='text-[14px]'>{transmission === 'a' ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image alt={'tire'} src={'/tire.svg'} width={20} height={20} />
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image alt={'gas'} src={'/gas.svg'} width={20} height={20} />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButtons title='View More' 
           containerStyles="w-full rounded-full py-[16px] bg-primary-blue"
           textStyle='text-white text-[14px] leading-[16px] font-bold'
           rightIcon='/right-arrow.svg'
           handleClick ={()=>setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModel={()=>setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard