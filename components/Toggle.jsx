import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkAtom from "../atoms/DarkAtom";

const Toggle = () => {
	// const [darkMode, setDarkMode] = useState(true);

	const [darkMode, setDarkMode] = useRecoilState(DarkAtom);

	const check = () => {
		if (localStorage.theme == "dark") {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	};

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
		check();
	}, []);

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
