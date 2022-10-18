import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerUser = async ({ email, password, name }: User) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) return "ALREADY_USER";
  const registerUser = await UserModel.create({
    email,
    password,
    name,
  });

  return registerUser;
};

const logginUser = async () => {};

export { registerUser, logginUser };
