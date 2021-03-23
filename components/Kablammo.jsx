import Pattern from "../components/Pattern";

const Kablammo = (props) => {
	const handleKablammoMouseMove = (event) => {
		console.log("handleKablammoMouseMove", event);
	};

	return (
		<Pattern
			className="flex justify-center"
			bgImage="/images/bg/purple-worms.svg"
		>
			{/* <img
                    className="w-full items-center"
                    src={doc.data.landing_image.url}
                  /> */}
			<div
				className={`w-full grid place-items-center`}
				onMouseMove={handleKablammoMouseMove}
			>
				<h1
					className={`animate-it relative text-40 leading-tight text-lime -mt-32`}
				>
					<span className={`scale-90%`}></span>
					<span className={`absolute inset-0 text-pink`}></span>
				</h1>
			</div>
			<style jsx>{`
				.scale-90% {
					transform: scale(0.9);
				}
			`}</style>
		</Pattern>
	);
};

export default Kablammo;
