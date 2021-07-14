import React, { useState } from "react";
import Pill from "./Pill";

const CharacterSetFilters = ({ handleFilterClick }) => {
  const [open, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };

  const categories = [
    {
      name: '.basic-latin',
      label: 'Basic Latin',
    },
    {
      name: '.extended-latin',
      label: 'Extended Latin'
    },
    {
      name: '.cyrillic',
      label: 'Cyrillic'
    },
    {
      name: '.numerals',
      label: 'Numerals'
    },
    {
      name: '.punctuation-and-symbols',
      label: 'Punctuation & Symbols'
    },
    {
      name: '.math-and-currency',
      label: 'Math & Currency'
    },
    {
      name: '.kablammoji',
      label: 'Kablammoji'
    },
    {
      name: '.patterns-and-borders',
      label: 'Patterns & Borders'
    },
    {
      name: '.zodiac',
      label: 'Zodiac'
    }
  ]


  return (
    <div className="character-set-filters">
      {/* <div onClick={handleClick}>
        <Pill className="bg-yellow h-10 lg:h-6 cursor-pointer">
          <span className="uppercase font-mono text-3 lg:text-2">Filters +</span>
        </Pill>
      </div>*/}
      <div 
        className={`filters w-100% text-black text-center grid place-items-center`}
      >
        <div className="w-100%">
          <div className="grid grid-cols-3 font-body">
            <div>
              <button
                data-filter={categories[0].name}
                onClick={handleFilterClick}
                className="bg-yellow hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[0].label}
              </button>
              <button
                data-filter={categories[1].name}
                onClick={handleFilterClick}
                className="bg-lime hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[1].label}
              </button>
              <button
                data-filter={categories[2].name}
                onClick={handleFilterClick}
                className="bg-pink hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[2].label}
              </button>
            </div>
            <div>
            <button
                data-filter={categories[3].name}
                onClick={handleFilterClick}
                className="bg-purple hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[3].label}
              </button>
              <button
                data-filter={categories[4].name}
                onClick={handleFilterClick}
                className="bg-orange hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[4].label}
              </button>
              <button
                data-filter={categories[5].name}
                onClick={handleFilterClick}
                className="bg-blue hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[5].label}
              </button>
            </div>
            <div>
            <button
                data-filter={categories[5].name}
                onClick={handleFilterClick}
                className="bg-lime hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[5].label}
              </button>
              <button
                data-filter={categories[6].name}
                onClick={handleFilterClick}
                className="bg-pink hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[6].label}
              </button>
              <button
                data-filter={categories[7].name}
                onClick={handleFilterClick}
                className="bg-purple hover:bg-lime h-10 lg:h-6 lg:border-2 border border-solid border-black text-black rounded-sm lg:rounded-lg text-center w-100% text-3 lg:text-2 uppercase"
              >
                {categories[7].label}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        button {
          appearance: none;
          outline: none;
        }
        .closed {
          height: 0;
          opacity: 0;
          border: 0;
          padding: 0;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default CharacterSetFilters;
