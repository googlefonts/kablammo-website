import { useState } from "react";

class useInputChange extends Component {
	constructor(props) {
	  super(props);
	  this.state = {input: {}}}
	
	render()
	{
		return(<></>)
	}
	}

export const useInputChange = () => {
	const [input, setInput] = useState({});

	const handleInputChange = (e) =>
		setInput({
			...input,
			[input.content]: e.target.textContent
			// [e.currentTarget.name]: e.currentTarget.value,
		});

	return [input, handleInputChange];
};
