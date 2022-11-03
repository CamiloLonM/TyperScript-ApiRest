import { Date } from "mongoose";

export interface Order {
  company: string;
  cityAndState: string;
  residence: string;
  numberOfOrder: number;
  telephone: number;
  description: string;
}
