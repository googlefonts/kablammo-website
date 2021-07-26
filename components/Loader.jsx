import React, {
	Component,
	Fragment,
	useState,
	useContext,
	useEffect,
	useRef,
} from "react";

const Loading = (props) => {

	return (
		<div className={`loading bg-lime absolute inset-0 ${
            props.className ? `${props.className}` : ``
        }`} id="loaderr">
			<style jsx>{`
				.loading {
                    height:100vh;
                    width:100vw;
                    z-index:100000;
				}
			`}</style>
		</div>
	);
};

export default Loading;
