import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../utils";
type ForgotPasswordProps = {
  email: string;
};

export const resetPasswordFct = (props: ForgotPasswordProps) => {
  const { email } = props;
  sendPasswordResetEmail(firebaseAuth, email)
    .then(() =>
      alert("Great! " + "We've sent you an email to reset your password")
    )
    .catch((error) => alert("Error! " + error.message?.split(": ")[1]));
};
