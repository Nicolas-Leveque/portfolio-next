import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	try {
		await sendgrid.send({
			to: 'nicoleveque@outlook.com',
			from: 'n.leveque@me.com',
			subject: `From portfolio : ${req.body.subject}`,
			html: `<div>
              <p>Nouveau message de ${req.body.fullname}</P>
              <p>Depuis l&apos;adresse: ${req.body.email}</p>
              <p>Message: ${req.body.message}</p>
            </div>`,
		});
	} catch (error) {
		console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res.status(200).json({ message: 'message envoyé' });
}

export default sendEmail;
