import Link from "next/link";
import Toggle from "./Toggle";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import DarkAtom from "../atoms/DarkAtom";

const Nav = () => {
	const [darkMode, setDarkMode] = useRecoilState(DarkAtom);

	const check = () => {
		if (localStorage.theme === "dark") {
			console.log("True");
			setDarkMode(true);
		} else {
			console.log("False");
			setDarkMode(false);
		}
	};

	useEffect(() => {
		check();
	}, [darkMode]);

	return (
		<>
			<div className='grid grid-flow-col place-content-between place-items-center px-8 py-3 text-2xl'>
				<div className=''>
					<Link href='/'>SiteName</Link>
				</div>
				<div className='grid grid-flow-col place-items-center gap-2'>
					<div className=''>
						<Link href='/'>Home</Link>
					</div>
					<div className=''>
						<Link href='/about'>About</Link>
					</div>
					<div className=''>
						<Link href='/contact'>Contact</Link>
					</div>
					<div className=''>
						<Toggle />
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
