import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { generateToken } from "../utils/jwt.handle";
import { encrypt, verified } from "../utils/password.handle";

const registerUser = async ({ email, password, name }: User) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) return "INVALID_DATA";
  //Encriptado
  const passwordHash = existingUser.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(existingUser.email);

  const data = {
    name: [existingUser.name],
    token,
  };
  return data;
};

export { registerUser, loginUser };
