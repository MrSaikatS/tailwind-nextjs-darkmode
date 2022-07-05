import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";

const Toggle = () => {
	const [darkMode, setDarkMode] = useState();

	const mode = () => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	};

	useEffect(() => {
		mode();
	}, [darkMode]);

	return (
		<>
			<DarkModeSwitch
				style={{ paddingTop: "2px" }}
				checked={darkMode}
				onChange={setDarkMode}
				size={32}
			/>
		</>
	);
};

export default Toggle;
