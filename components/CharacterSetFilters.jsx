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
				<Pill className="bg-yellow h-6 cursor-pointer">
					<span className="uppercase font-mono text-2">
						Filters +
					</span>
				</Pill>
			</div>
			<div
				className={`filters w-100% bg-blue border-2 border-solid border-black text-black rounded-lg text-center py-48 grid place-items-center ${
					open ? "open" : "closed"
				}`}
			>
				<div className="w-3/4">
					<div className="grid grid-cols-2 font-body">
						<div>
							<button className="bg-yellow hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Basic Latin
							</button>
							<button className="bg-lime hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Numerals
							</button>
							<button className="bg-gray hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Symbols
							</button>
							<button className="bg-purple hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Emojis
							</button>
						</div>
						<div>
							<button className="bg-orange hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Extended
							</button>
							<button className="bg-green hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Punctuation
							</button>
							<button className="bg-blue hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Zodiac
							</button>
							<button className="bg-pink hover:bg-lime p-8 border-2 border-solid border-black text-black rounded-lg text-center w-100% text-2 uppercase mb-8">
								Patterns
							</button>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
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
