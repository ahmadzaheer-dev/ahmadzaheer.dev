import { z } from "zod";
import { ZodObject } from "zod";
import { ZodError } from "@/errors";

const email = z.string().email();
const password = z.string().min(8, "Password must be atleast 8 characters");
const name = z.string();

export const SignUpFormSchema = z.object({
  name,
  email,
  password,
});

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;

// TODO: Define better types for this function
export const validateInput = (schema: ZodObject<any>, data: object) => {
  const validationResults = schema.safeParse(data);

  if (!validationResults.success) {
    throw new ZodError(JSON.stringify(validationResults.error.flatten()));
  }
};
