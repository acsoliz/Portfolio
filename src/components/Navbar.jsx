import React, { useCallback, useMemo, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Profile.png';
import { Link } from 'react-scroll';

const menuItems = [
	{ to: 'home', label: 'Home' },
	{ to: 'about', label: 'About' },
	{ to: 'skills', label: 'Skills' },
	{ to: 'work', label: 'Work' },
	{ to: 'contact', label: 'Contact' },
];

const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/acsoliz/',
		label: 'Linkedin',
		icon: <FaLinkedin size={30} />,
		bgClass: 'bg-blue-600',
	},
	{
		href: 'https://github.com/acsoliz',
		label: 'GitHub',
		icon: <FaGithub size={30} />,
		bgClass: 'bg-[#333333]',
	},
	{
		href: 'mailto:acsoliz@outlook.com?Subject=Aquí%20el%20asunto%20del%20mail',
		label: 'Email',
		icon: <HiOutlineMail size={30} />,
		bgClass: 'bg-[#6fc2b0]',
	},
	{
		href: 'https://drive.google.com/file/d/1gZAy8fmRFs-SAAQ2UNcZC7cpH1XA9I9b/view?usp=sharing',
		label: 'Curriculum',
		icon: <BsFillPersonLinesFill size={30} />,
		bgClass: 'bg-[#565f69]',
	},
];


const Navbar = () => {
	const [nav, setNav] = useState(false);
	// Use useCallback to memoize handleClick function
	const handleClick = useCallback(() => {
		setNav((prevNav) => !prevNav);
	}, []);

	// Use useMemo to memoize menuItems and socialLinks maps
	const renderedMenuItems = useMemo(() => {
		return menuItems.map((item) => (
			<li key={item.label}>
				<Link to={item.to} smooth={true} duration={500}>
					{item.label}
				</Link>
			</li>
		));
	}, [handleClick]);

	const mobileRenderedMenuItems = useMemo(() => {
		return menuItems.map((item) => (
			<li key={item.label} className="py-6 text-4xl">
				<Link onClick={handleClick} to={item.to} smooth={true} duration={500}>
					{item.label}
				</Link>
			</li>
		))
	})

	const renderedSocialLinks = useMemo(() => {
		return socialLinks.map((link) => (
			<li
				key={link.label}
				className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${link.bgClass}`}
			>
				<a className="flex justify-between items-center w-full text-gray-300" href={link.href}>
					{link.label} {link.icon}
				</a>
			</li>
		));
	}, []);


	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<img src={Logo} alt="Logo image" style={{ width: '12%' }} className="rounded-full " />
			</div>

			{/* menu */}

			<ul className="hidden md:flex">
				{renderedMenuItems}
			</ul>

			{/* Hamburguer */}
			<div onClick={handleClick} className="md:hidden z-10">
				{
					!nav ? <FaBars /> :
						<FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav ? 'hidden' :
						' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				{mobileRenderedMenuItems}

			</ul>

			{/* Social icons */}

			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					{renderedSocialLinks}

				</ul>
			</div >
		</div >
	);
};
export default Navbar;
