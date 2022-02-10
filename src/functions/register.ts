import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../utils";

type RegisterProps = {
  email: string;
  password: string;
  username: string;
};

export const registerFct = (props: RegisterProps) => {
  const { email, password, username } = props;
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      if (firebaseAuth.currentUser) {
        updateProfile(firebaseAuth.currentUser, {
          displayName: username,
        })
          .then(() => alert("Great!" + ` Welcome ${username}`))
          .catch((error) => alert("Error! " + error.message?.split(": ")[1]));
      }
    })
    .catch((error) => {
      alert("Error! " + error.message?.split(": ")[1]);
    });
};
