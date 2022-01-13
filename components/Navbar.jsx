import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  return (
		<header className="bg-gray-800 md:sticky top-0 z-10 w-full">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<div className="title-font font-medium text-white mb-4 md:mb-0">
					<a href="#about" className="ml-3 text-xl">
						Nicolas Lévêque
					</a>
				</div>
				<nav className="md:mr-auto md:ml-4 md:py-5 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
					<a href="#projects" className="mr-5 hover:text-white">
						Projets
					</a>
					<a href="#skills" className="mr-5 hover:text-white">
						Skills
					</a>
				</nav>
				<div className="inline-flex items-center align-center py-1 px-3 text-base mt-4 md:mt-0">
					<a
						href="https://www.linkedin.com/in/nicoleveque/"
						target="_blank"
						rel="noreferrer"
						className="mr-5 hover:text-white"
					>
						
						<FontAwesomeIcon icon={faLinkedin} size="2x" className="m-5" />
					</a>
					<a
						href="https://github.com/Nicolas-Leveque"
						target="_blank"
						rel="noreferrer"
						className="mr-5  hover:text-white"
					>
						<FontAwesomeIcon icon={faGithub} size="2x" className="m-5" />
					</a>
					<a
						href="mailto:nicoleveque@outlook.com"
						target="_blank"
						rel="noreferrer"
						className="mr-5   hover:text-white"
					>
						<FontAwesomeIcon icon={faEnvelope} size="2x" className="m-5" />
					</a>
				</div>
			</div>
		</header>
	);
}