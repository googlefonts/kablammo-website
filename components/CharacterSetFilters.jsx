import React, { useState } from "react";
import Pill from "./Pill";

const CharacterSetFilters = () => {
	const [open, setOpen] = useState(false);
	const [activeFilters, setActiveFilters] = useState(false);

	const handleClick = (event) => {
		setOpen(!open);
	};

	return (
		<div className="character-set-filters">
			<div onClick={handleClick}>
				<Pill className="hvr-shrink bg-yellow h-6 cursor-pointer">
					<span className="uppercase font-mono text-2">
						Filters +
					</span>
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
							<button className="hvr-shrink bg-yellow hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Basic Latin
							</button>
							<button className="hvr-shrink bg-lime hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Numerals
							</button>
							<button className="hvr-shrink bg-gray hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Symbols
							</button>
							<button className="hvr-shrink bg-purple hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Emojis
							</button>
						</div>
						<div>
							<button className="hvr-shrink bg-orange hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Extended
							</button>
							<button className="hvr-shrink bg-green hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Punctuation
							</button>
							<button className="hvr-shrink bg-blue hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
								Zodiac
							</button>
							<button className="hvr-shrink bg-pink hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase">
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
