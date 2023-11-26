"use client";
import { CustomButtonsProps } from "@/types";
import Image from "next/image";

const CustomButtons = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyle,
  rightIcon
}: CustomButtonsProps) => {
  return (
    <button
      type={btnType || `button`}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>{rightIcon && (
        <div className='relative w-6 h-6'>
          <Image 
          src={rightIcon}
          alt='right Icon'
          fill
          className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButtons;
