import prisma from "@/lib/prisma";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { SignUpFormSchemaType } from "@/validations";
import { AlreadyExistsError } from "@/errors";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email: email } });
};

export const signUpUser = async (data: SignUpFormSchemaType): Promise<User> => {
  const userAlreadyExists = (await getUserByEmail(data.email)) !== null;

  if (userAlreadyExists) {
    throw new AlreadyExistsError(
      `User with email (${data.email}) already exists`
    );
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      email: data.email as string,
      hashedPassword: hashedPassword,
    },
  });

  return user;
};
