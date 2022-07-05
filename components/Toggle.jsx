import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const Toggle = () => {
	const [darkMode, setDarkMode] = useState();
	return (
		<>
			<DarkModeSwitch
				style={{ paddingTop: "2px" }}
				checked={darkMode}
				onChange={setDarkMode}
				size={36}
			/>
		</>
	);
};

export default Toggle;
