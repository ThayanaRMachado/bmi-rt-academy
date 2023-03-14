import { Trainer } from "./trainer";

export class Member {
  id?: number;
  name?: string;
  trainers = new Trainer();
  height?: number;
  weight?: number;
  imc?: number;
  classification?: string;
}
