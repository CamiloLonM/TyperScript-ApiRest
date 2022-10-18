import { Auth } from "./auth.interface";

export interface User extends Auth {
  name: string;
  lastName: string;
  age: number;
  description: string;
}
