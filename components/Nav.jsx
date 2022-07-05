import Toggle from "./Toggle";

const Nav = () => {
	return (
		<>
			<div className='grid grid-flow-col place-content-between place-items-center px-8 py-3 text-2xl'>
				<div className=''>SiteName</div>
				<div className='grid grid-flow-col place-items-center gap-2'>
					<div className=''>Home</div>
					<div className=''>About</div>
					<div className=''>Contact</div>
					<div className=''>
						<Toggle />
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
