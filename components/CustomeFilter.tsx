"use client"

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

const CustomeFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: { title: string, value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())

    router.push(newPathName)
  }
  return (
    <div className='w-fill'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      ><div className="relative w-fit z-10">
          <Listbox.Button className={'custom-filter__btn'}>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src={'/chevron-up-down.svg'}
              alt='chevron up down'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Option
              className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none  px-4 py-2  ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                  {({ selected }) => (
                    <span className={`block truncate  ${selected ? 'font-medium' : 'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Option>
          </Transition>
        </div></Listbox>
    </div>
  )
}

export default CustomeFilter