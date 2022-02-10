import * as Yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInputs } from "@app-types/parts";
import { loginFct } from "../../../functions";
import InputSection from "./InputSection";
import { Button } from "@mui/material";

export function Login() {
  const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<AuthInputs> = (data) => {
    loginFct({
      email: data.email,
      password: data.password,
    });
  };
  return (
    <div className="space-y-4">
      <InputSection
        field="email"
        type="email"
        placeholder="Email"
        control={control}
        errors={errors}
      />
      <InputSection
        field="password"
        type="password"
        placeholder="Password"
        control={control}
        errors={errors}
        isSecured
      />
      <Button onClick={handleSubmit(onSubmit)}>Login</Button>
    </div>
  );
}
