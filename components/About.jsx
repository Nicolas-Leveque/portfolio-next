import Image from 'next/image';
import { motion } from 'framer-motion';
import photoProfil from '../public/data/nicolas2.jpeg';

export default function About() {
	return (
		<section id="about" className="max-w-screen-lg my-5">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: {
						scale: 0.8,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: 0.2,
							duration: 1,
						},
					},
				}}
				className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center"
			>
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Bonjour, <br />
						je m&apos;appelle Nicolas
						<br />
						Je suis développeur web
					</h1>
					<p className="my-4 leading-relaxed">
						Construction de sites et d&apos;applications web <br />
						Audit et optimisation SEO et accessibilité <br />
						HTML / CSS / JavaScript / Reactjs / MongoDB / MySQL / Nodejs
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="transition duration-500 ease-in-out inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:ouline-none hover:bg-green-600 hover:animate-pulse rounded-lg text-lg "
						>
							Contactez moi
						</a>
						<a
							href="#projects"
							className="transition duration-500 ease-in-out ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-lg text-lg"
						>
							{' '}
							Projets
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-20 flex justify-center">
					<Image
						width={350}
						height={350}
						objectFit="cover"
						src={photoProfil}
						alt="photo de profil"
						className="object-cover object-center rounded-full "
					/>
				</div>
			</motion.div>
		</section>
	);
}
