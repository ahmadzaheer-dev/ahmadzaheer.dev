"use server";

import prisma from "@/lib/prisma";
import {
  validateInput,
  MessageFormSchemaType,
  MessageFormSchema,
} from "@/validations";

export const submitMessage = async (prevState: any, formData: FormData) => {
  try {
    const message = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = validateInput(MessageFormSchema, message);

    await prisma.message.create({
      data: validatedData as MessageFormSchemaType,
    });

    return { message: "Message Sent Successfully", status: "success" };
  } catch (err) {
    return { message: "Message Sending Failed", status: "failed" };
  }
};
