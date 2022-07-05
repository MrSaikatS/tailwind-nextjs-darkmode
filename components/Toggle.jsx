import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkAtom from "../atoms/DarkAtom";

const Toggle = () => {
	// const [darkMode, setDarkMode] = useState(true);

	const [darkMode, setDarkMode] = useRecoilState(DarkAtom);

	const mode = () => {
		if (darkMode) {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		} else {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
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
