"use client";
import { CustomButtonsProps } from "@/types";
import Image from "next/image";

const CustomButtons = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonsProps) => {
  return (
    <button
      type={btnType || `button`}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButtons;
