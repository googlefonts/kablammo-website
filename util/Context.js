import { createContext, useState } from "react";

export const StoreContext = createContext();

const Context = ({ children }) => {
	const [showThumbnails, toggleThumbnails] = useState(false);
	const store = {
		showThumbnails: { showThumbnails, toggleThumbnails },
	};
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};

export default Context;
