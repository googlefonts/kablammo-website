import React, { useEffect } from "react";
import CharacterSetFilter from "./CharacterSetFilter";

const CharacterSetFilters = ({ handleFilterClick, activeFilters }) => {


  const categories = [
    {
      name: '.basic-latin',
      label: 'Basic Latin',
      color: 'yellow'
    },
    {
      name: '.extended-latin',
      label: 'Extended Latin',
      color: 'lime'
    },
    {
      name: '.cyrillic',
      label: 'Cyrillic',
      color: 'pink'
    },
    {
      name: '.numerals',
      label: 'Numerals',
      color: 'purple'
    },
    {
      name: '.punctuation-and-symbols',
      label: 'Punctuation & Symbols',
      color: 'orange'
    },
    {
      name: '.math-and-currency',
      label: 'Math & Currency',
      color: 'blue'
    },
    {
      name: '.kablammoji',
      label: 'Kablammoji',
      color: 'lime'
    },
    {
      name: '.patterns-and-borders',
      label: 'Patterns & Borders',
      color: 'pink'
    },
    {
      name: '.zodiac',
      label: 'Zodiac',
      color: 'purple'
    }
  ]
useEffect(() => {
  let activefirst = activeFilters.includes(categories[0].name);
});

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
              <CharacterSetFilter name={categories[0].name} color={categories[0].color} label={categories[0].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[0].name)} />
              <CharacterSetFilter name={categories[1].name} color={categories[1].color} label={categories[1].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[1].name)} />
              <CharacterSetFilter name={categories[2].name} color={categories[2].color} label={categories[2].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[2].name)} />
            </div>
            <div>
              <CharacterSetFilter name={categories[3].name} color={categories[3].color} label={categories[3].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[3].name)} />
              <CharacterSetFilter name={categories[4].name} color={categories[4].color} label={categories[4].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[4].name)} />
              <CharacterSetFilter name={categories[5].name} color={categories[5].color} label={categories[5].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[5].name)} />
            </div>
            <div>
              <CharacterSetFilter name={categories[6].name} color={categories[6].color} label={categories[6].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[6].name)} />
              <CharacterSetFilter name={categories[7].name} color={categories[7].color} label={categories[7].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[7].name)} />
              <CharacterSetFilter name={categories[8].name} color={categories[8].color} label={categories[8].label} onClick = {handleFilterClick} active={activeFilters.includes(categories[8].name)} />
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
