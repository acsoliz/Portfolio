import React from 'react';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
					<div className="sm:text-rigth pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
					</div>
					<div>-</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold ">
						<p>Nice to meet you. Please take a look around</p>
					</div>
					<div>
						<p>
							I am an Argentian passionate programmer with a strong background in front-end and back-end development.
							<br />
						</p><br />
						<p>

							Currently based in Pamplona, Spain. I am open to relocating for hybrid work opportunities that allow me to continue my passion for programming while exploring new places.
						</p>
						<br />
						<p>
							I enjoy traveling and am always eager to immerse myself in different cultures and experiences.
							<br />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
