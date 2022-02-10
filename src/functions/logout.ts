import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils";

export const logoutFct = () => {
  signOut(firebaseAuth);
};
