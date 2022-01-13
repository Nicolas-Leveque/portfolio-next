import { useEffect } from 'react';
import AOS from 'aos'
import { hardSkills, softSkills } from '../public/data/data'
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'

export default function Skills() {
  useEffect(() =>{
    AOS.init({
      duration: 2000
    })
  })
  return (
		<section id="skills" className="max-w-screen-lg mb-5">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Skills &amp; technologies
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						Après plusieurs années dans les secteurs industriel et logistique,
						ce qui m&apos;a apporté de l&apos;expérience professionnelle et la rigueur, je
						reviens vers ma première passion: l&apos;informatique.Devenu développeur
						web, j&apos;ai ajouter à mes compétences de maintenance, l&apos;aspect
						programmation et création.
					</p>
				</div>
				<h3 className="flex justify-center font-bold text-white text-2xl">
					Hard Skills
				</h3>
				<div className="flex flex-wrap lg:w4/5 sm:mx-auto sm:mb-2">
					{hardSkills.map((skill) => (
						<div
							key={skill}
							data-aos="fade-down"
							className="p-2 sm:w-1/2 w-full"
						>
							<div className="bg-gray-800 rounded flex p-4 h-full items-center">
								<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
								<span className="title-font font-medium text-white">
									{skill}
								</span>
							</div>
						</div>
					))}
				</div>
				<h3 className="flex justify-center font-bold text-white text-2xl">
					Soft Skills
				</h3>
				<div className="flex flex-wrap lg:w4/5 sm:mx-auto sm:mb-2 ">
					{softSkills.map((skill) => (
						<div
							key={skill}
							data-aos="fade-up"
							
							className="p-2 sm:w-1/2 w-full"
						>
							<div className="bg-gray-800 rounded flex p-4 h-full items-center">
								<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
								<span className="title-font font-medium text-white">
									{skill}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}