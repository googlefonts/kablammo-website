import React, { useState } from "react";
import Pill from "./Pill";

const CharacterSetFilters = ({ handleFilterClick }) => {
  const [open, setOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };

  return (
    <div className="character-set-filters">
      <div onClick={handleClick}>
        <Pill className="bg-yellow h-6 cursor-pointer">
          <span className="uppercase font-mono text-2">Filters +</span>
        </Pill>
      </div>
      <div
        className={`filters w-100% text-black text-center grid place-items-center ${
          open ? "open" : "closed"
        }`}
      >
        <div className="w-100%">
          <div className="grid grid-cols-2 font-body">
            <div>
              <button
                data-filter=".basic-latin"
                onClick={handleFilterClick}
                className="bg-yellow hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Basic Latin
              </button>
              <button
                data-filter=".numerals"
                onClick={handleFilterClick}
                className="bg-lime hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Numerals
              </button>
              <button
                data-filter=".symbols"
                onClick={handleFilterClick}
                className="bg-gray hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Symbols
              </button>
              <button
                data-filter=".emojis"
                onClick={handleFilterClick}
                className="bg-purple hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Emojis
              </button>
            </div>
            <div>
              <button
                data-filter=".extended"
                onClick={handleFilterClick}
                className="bg-orange hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Extended
              </button>
              <button
                data-filter=".punctuation"
                onClick={handleFilterClick}
                className="bg-green hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Punctuation
              </button>
              <button
                data-filter=".zodiac"
                onClick={handleFilterClick}
                className="bg-blue hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Zodiac
              </button>
              <button
                data-filter=".patterns"
                onClick={handleFilterClick}
                className="bg-pink hover:bg-lime h-6 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase"
              >
                Patterns
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
