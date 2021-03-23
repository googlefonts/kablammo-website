import React, { useState } from "react";

const TypeTesterSelect = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [currentOption, setCurrentOption] = useState("Option 1");

	const handleOptionClick = (value) => {
		setShowOptions(!showOptions);
		setCurrentOption(value);
	};
	return (
		<div className="pb-10 pl-20 pr-2 w-1/6 flex flex-col">
			<div className="select">
				<ol
					className={`select-options z-99 ${
						showOptions ? "show-options" : "hide-options"
					}`}
				>
					<li
						className="w-100% h-3 -mb-0.5 bg-blue hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center"
						onClick={() => handleOptionClick("Option 2")}
					>
						Option 2
					</li>
					<li
						className="w-100% h-3 -mb-0.5 bg-lime hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center"
						onClick={() => handleOptionClick("Option 3")}
					>
						Option 3
					</li>
					<li
						className="w-100% h-3 -mb-0.5 bg-orange hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center"
						onClick={() => handleOptionClick("Option 4")}
					>
						Option 4
					</li>
				</ol>
				<div
					className="select-current-option w-100% h-3 bg-yellow hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center"
					onClick={() => setShowOptions(!showOptions)}
				>
					{currentOption}
				</div>
			</div>
			<style jsx>{`
				.select {
				}
				.select-options {
					animation: height 600ms;
				}
				.select-options li {
					cursor: pointer;
				}
				.select-current-option {
					cursor: pointer;
				}
				.hide-options {
					opacity: 0;
					visibility: hidden;
				}
			`}</style>
		</div>
	);
};

export default TypeTesterSelect;
