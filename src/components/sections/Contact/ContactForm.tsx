"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const { name, email, message } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label className="text-xs uppercase font-bold mb-2 block text-typo-body">
        Full Name
      </label>
      <input
        name="name"
        type="text"
        required
        className="p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5 autofill:bg-transparent"
        value={name}
        onChange={handleChange}
      />
      <label className="text-xs uppercase font-bold mb-2 block text-typo-body">
        Email Address
      </label>
      <input
        name="email"
        type="email"
        required
        className="p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5"
        value={email}
        onChange={handleChange}
      />
      <label className="text-xs uppercase font-bold mb-2 block text-typo-body">
        Message
      </label>
      <textarea
        name="message"
        required
        className="p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5"
        rows={5}
        value={message}
        onChange={handleChange}
      />
      <input
        type="submit"
        className="p-2.5 rounded-md transition-all bg-white hover:bg-primary-green text-bgColor font-semibold w-full text-center cursor-pointer"
        value="Submit"
      />
    </form>
  );
};

export default ContactForm;
