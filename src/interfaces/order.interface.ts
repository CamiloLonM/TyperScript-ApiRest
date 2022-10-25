import { Date } from "mongoose";

export interface Order {
  company: string;
  creationDate: Date;
  cityAndState: string;
  residence: string;
  numberOfOrder: number;
  telephone: number;
  description: string;
}
