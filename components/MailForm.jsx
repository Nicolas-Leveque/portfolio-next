import { useState } from 'react';

export default function MailForm() {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	return (
		<form
			action=""
			className="flex flex-col justify-center w-full lg:w-4/5 mt-5 mx-auto"
		>
			<h3 className="self-center text-white text-bold">
				Ou m&apos;envoyer un e-mail
			</h3>
			<label htmlFor="fullname">Nom</label>
			<input
				type="text"
				name="fullname"
				value={fullname}
				onChange={(e) => {
					setFullname(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="subject">Sujet</label>
			<input
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => {
					setSubject(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="message">Message</label>
			<textarea
				name="message"
				cols="30"
				rows="7"
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			></textarea>
			<div className="flex flex-row items-center justify-start">
				<button 
          type="submit"
          className="text-white bg-green-700 border-0 py-2 px-6 focus:ouline-none hover:bg-green-600 hover:animate-pulse rounded-lg text-lg w-32">Envoi</button>
			</div>
		</form>
	);
}
