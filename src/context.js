import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();


const AppProvider = ({children}) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [page,setPage] = useState({text: '', list: []});
	const [location, setLocation] = useState({});
	const openSubmenu = (pageT, locationT) => {
		const list = sublinks.find((item) => item.page === pageT);
		setPage(list);
		setLocation(locationT);
		setIsSubmenuOpen(true);
	}
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	}
	const openSidebar = () => {
		setIsSidebarOpen(true);
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	}
	return (
	<AppContext.Provider 
	 value={{
	 	 	isSubmenuOpen,
	 	 	isSidebarOpen,
	 	 	openSubmenu,
	 	 	closeSubmenu,
	 	 	openSidebar,
	 	 	closeSidebar,
	 	 	page,
	 	 	location,
	 	 }}
	>
		{children}
	</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export {AppContext,AppProvider };