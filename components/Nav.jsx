import Link from "next/link";
import Toggle from "./Toggle";

const Nav = () => {
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
