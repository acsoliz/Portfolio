import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import PostgresSql from '../assets/PostgresSQL.png';
import Redux from '../assets/redux.png';
import Git from '../assets/Git.png';
import Aws from '../assets/aws.png';
import TypeScript from '../assets/typescript.png';
import Sveltekit from '../assets/svelte.png';
import Azure from '../assets/azure.png';
import Supabase from '../assets/supabase.png';
import Mongo from '../assets/mongo.png';
import Nginx from '../assets/nginx.png';
import Docker from '../assets/docker-logos/docker.png';


const Skills = () => {
	const skills = [
		{ name: 'HTML', icon: HTML },
		{ name: 'CSS', icon: CSS },
		{ name: 'JavaScript', icon: JavaScript },
		{ name: 'TypeScript', icon: TypeScript },
		{ name: 'React', icon: ReactImg },
		{ name: 'Redux', icon: Redux },
		{ name: 'SvelteKit', icon: Sveltekit },
		{ name: 'Tailwind', icon: Tailwind },
		{ name: 'Node.JS', icon: Node },
		{ name: 'Mongo', icon: Mongo },
		{ name: 'PostgresSql', icon: PostgresSql },
		{ name: 'Supabase', icon: Supabase },
		{ name: 'Aws', icon: Aws },
		{ name: 'Azure', icon: Azure },
		{ name: 'GitHub', icon: GitHub },
		{ name: 'Git', icon: Git },
		{ name: 'Nginx', icon: Nginx },
		{ name: 'Docker', icon: Docker },

	];
	return (
		<div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
			{/* Container */}
			<div className="max-w-[1000PX] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
					<p className="py-4">// these are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-6 gap-6 text-center py-8">
					{skills.map((skill, index) => (
						<div key={index} className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500 flex flex-col " >
							<img className="w-20 h-20 mx-auto" src={skill.icon} alt={`${skill.name} icon`} />
							<p className="my-4">{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
