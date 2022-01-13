export default function MailForm() {
  return (
    <form action="" className="flex flex-col justify-center w-4/5 mt-5">
      <h3 className="self-center text-white text-bold">Envoyez moi un E-mail</h3>
      <label htmlFor="fullname">Nom</label>
      <input type="text" name="fullname" className="rounded-lg bg-gray-800 p-2 my-2"/>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" className="rounded-lg bg-gray-800 p-2 my-2"/>

      <label htmlFor="subject">Sujet</label>
      <input type="text" name="subject" className="rounded-lg bg-gray-800 p-2 my-2"/>

      <label htmlFor="message">Message</label>
      <textarea name="message" cols="30" rows="7" className="rounded-lg bg-gray-800 p-2 my-2"></textarea>
    </form>
  );
}