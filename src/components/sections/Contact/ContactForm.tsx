"use client";

import { submitMessage } from "@/services/formActions";
import { useFormState } from "react-dom";
import { cn } from "@/lib/utils";

type ActionReturnType = {
  message: string;
  status: "rest" | "success" | "failed";
};

const initialState: ActionReturnType = {
  message: "",
  status: "rest",
};

const inputClassName =
  "p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5";
const labelClassName = "text-xs uppercase font-bold mb-2 block text-typo-body";

const ContactForm = () => {
  const [state, formAction] = useFormState(submitMessage, initialState);

  return (
    <form action={formAction}>
      <label className={labelClassName}>Full Name</label>
      <input name="name" type="text" required className={inputClassName} />
      <label className={labelClassName}>Email Address</label>
      <input name="email" type="email" required className={inputClassName} />
      <label className={labelClassName}>Message</label>
      <textarea name="message" required className={inputClassName} rows={5} />
      {!!state.message && (
        <p
          className={cn("font-bold mb-5 text-center", {
            "text-red-500": state.status === "failed",
            "text-primary-green": state.status === "success",
          })}
        >
          {state.message}
        </p>
      )}
      <input
        type="submit"
        className="p-2.5 rounded-md transition-all bg-white hover:bg-primary-green text-bgColor font-semibold w-full text-center cursor-pointer"
        value="Submit"
      />
    </form>
  );
};

export default ContactForm;
