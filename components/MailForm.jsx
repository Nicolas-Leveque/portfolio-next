import { useState } from 'react';

export default function MailForm() {
		//States variable formulaire
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
		//state variable validation
	const [errors, setErrors] = useState({})
		//State variable bouton formulaire
	const [buttonText, setButtonText] = useState('Envoi');
		//State variable affichage succès ou erreurs
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)
	const [showFailureMessage, setShowFailureMessage] = useState(false)

	const handleValidation = () => {
		let tempErrors = {}
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors[fullname] = true
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors[email] = true
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors[subject] = true
			isValid = false
		}
		if (message.length <= 0) {
			tempErrors[message] = true
			isValid = false
		}

		setErrors({ ...tempErrors})
		console.log("errors", errors)
		return isValid
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidform = handleValidation()

		if (isValidform) {
			setButtonText('envoi en cours')
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					fullname,
					email,
					subject,
					message
				}),
				headers: {
					"Content-Type": "application/json"
				},
				method: "POST"
			})
			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowFailureMessage(true)
				setShowSuccessMessage(false)
				setButtonText('Envoi')

				setFullname('')
				setEmail('')
				setSubject('')
				setMessage('')
				return
			}
			setShowFailureMessage(false);
			setShowSuccessMessage(true);
			setButtonText('Envoi');

			setFullname('');
			setEmail('');
			setSubject('');
			setMessage('');
		}
		console.log(fullname, email,subject,message)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center w-full lg:w-4/5 mt-5 mx-auto"
		>
			<h3 className="self-center text-white text-bold">
				Ou m&apos;envoyer un e-mail
			</h3>
			<label htmlFor="fullname">Nom<span className="text-red-500">*</span></label>
			<input
				type="text"
				name="fullname"
				value={fullname}
				onChange={(e) => {
					setFullname(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="email">Email<span className="text-red-500">*</span></label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="subject">Sujet<span className="text-red-500">*</span></label>
			<input
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => {
					setSubject(e.target.value);
				}}
				className="rounded-lg bg-gray-800 p-2 my-2"
			/>

			<label htmlFor="message">Message<span className="text-red-500">*</span></label>
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
          className="text-white bg-green-700 border-0 py-2 px-6 focus:ouline-none hover:bg-green-600 hover:animate-pulse rounded-lg text-lg w-32">
					{buttonText}
				</button>
			</div>
			<div className="text-left">
				{showSuccessMessage && (
					<p className="text-green-500">
						Merci! Votre message a été envoyé
					</p>
				)}
				{showFailureMessage && (
					<p className="text-red-500">
						Oups, Quelque chose a raté, merci de recommencer
					</p>
				)}

			</div>
		</form>
	);
}
