import { Imessages } from "./messages";
export interface IUser {
    fullname: string;
    password: string;
    email: string;
    phone : string; 
    userType : string ; 
    messages : Imessages [ ] ; 
  }