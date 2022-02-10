import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils";

type LoginProps = {
  email: string;
  password: string;
};

export const loginFct = (props: LoginProps) => {
  const { email, password } = props;
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      alert(`Great!, Welcome ${userCredential.user.displayName}`);
    })
    .catch((error) => {
      alert("Error!, " + error.message?.split(": ")[1]);
    });
};
