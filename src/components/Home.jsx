import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
var linkHenry = 'http:';
var Link = 'http:';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/*  Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-pink-600"> Hi, mi name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Alan</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a full-stack developer</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					Hi, I'm Alan. I've experiance working as FullStack Programmer  in projects like {' '}
					<a href="http://www.ElPais.com">ElPais.com</a> and ApuntesConNota. I'm doing some personal projects and I am looking for challenges to continue growing as IT professional!
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
						View work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
