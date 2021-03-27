import React, { useState } from "react";

const TypeTesterSelect = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [options, setOptions] = useState([
		{ title: "Option 1", sort: 1, active: true },
		{ title: "Option 2", sort: 2, active: false },
		{ title: "Option 3", sort: 3, active: false },
		{ title: "Option 4", sort: 4, active: false },
	]);
	const handleOptionClick = (option) => {
		setShowOptions(!showOptions);
		const newOptions = options.map((newOption, index) => {
			if (newOption.title === option.title) {
				newOption.active = !option.active;
			} else {
				newOption.active = false;
			}
			return newOption;
		});
		setOptions(newOptions);
	};

	return (
		<div className="pb-10 pl-20 pr-2 w-1/6 flex flex-col">
			<div className="select">
				<ol
					className={`select-options z-99 ${
						showOptions ? "show-options" : "hide-options"
					}`}
				>
					{options
						.filter((x) => x.active === false)
						.map((option, index) => {
							return (
								<li
									key={index}
									className={`w-100% h-3 -mb-0.5 hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center ${
										index === 0
											? `bg-blue`
											: index === 1
											? `bg-lime`
											: `bg-orange`
									}`}
									onClick={() => handleOptionClick(option)}
								>
									{option.title}
								</li>
							);
						})}
					{/*<li
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
					</li>*/}
				</ol>
				<div
					className="select-current-option w-100% h-3 bg-yellow hover:bg-pink border-2 border-solid border-black rounded-lg relative flex justify-center items-center overflow-hidden font-body uppercase text-1 flex justify-center items-center"
					onClick={() => setShowOptions(!showOptions)}
				>
					{options.filter((x) => x.active === true)[0].title}
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
