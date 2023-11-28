'use client'

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButtons } from "."
import { updateSearchParams } from "@/utils"


const ShowMore = ({ isNext, pageNumber,setLimit }: ShowMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (<>
                <CustomButtons
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            </>
            )}
        </div>
    )
}

export default ShowMore