import { useState, useEffect } from "react";
function DarkModeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem("dark-mode") === "true" || false;
	});

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
		localStorage.setItem("dark-mode", isDarkMode);
	}, [isDarkMode]);

	return <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>;
}

export default DarkModeToggle;
