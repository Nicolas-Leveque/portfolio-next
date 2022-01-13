import MailForm from '../components/MailForm'
import { MailIcon } from '@heroicons/react/solid'

export default function Contact() {
  return (
    <section id="contact" className="max-w-screen-lg mb-5 flex flex-col justify-center items-center w-1/2" >
      <MailIcon className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Contact
					</h1>
      <a href="https://www.linkedin.com/in/nicoleveque/" className="w-full rounded-lg px-10 py-5 m-4 flex justify-center items-center text-white text-lg bg-blue-600">LinkedIn</a>
      <a href="https://twitter.com/Chewback26" className="w-full  rounded-lg px-10 py-5 m-4 flex justify-center items-center text-white text-lg bg-sky-600">Twitter</a>
      <a href="https://github.com/Nicolas-Leveque" className="w-full rounded-lg px-10 py-5 m-4 flex justify-center items-center text-white text-lg bg-slate-500">GitHub</a>
      <MailForm />
    </section>
  );
}