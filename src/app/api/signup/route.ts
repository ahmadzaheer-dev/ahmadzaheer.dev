import { NextRequest } from "next/server";
import { SignUpFormSchema, SignUpFormSchemaType } from "@/validations";
import { validateInput } from "@/validations";
import { signUpUser } from "@/services/user";
import requestWrapper from "@/requestWrapper";

export const POST = requestWrapper(async (request: NextRequest) => {
  const data = await request.json();
  const validatedData = validateInput(SignUpFormSchema, data);
  return Response.json(
    await signUpUser(validatedData.data as SignUpFormSchemaType)
  );
});
