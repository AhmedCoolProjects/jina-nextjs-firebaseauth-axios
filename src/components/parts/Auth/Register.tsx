import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthInputs } from "@app-types/parts";
import { registerFct } from "../../../functions";
import InputSection from "./InputSection";
import { Button } from "@mui/material";

export function Register() {
  const formSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must and should match"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<AuthInputs> = (data) => {
    registerFct({
      email: data.email,
      username: data.username || "User",
      password: data.password,
    });
  };
  return (
    <div className="space-y-3">
      <InputSection
        control={control}
        errors={errors}
        field="username"
        placeholder="Username"
        type="text"
      />
      <InputSection
        control={control}
        errors={errors}
        field="email"
        type="email"
        placeholder="Email"
      />
      <InputSection
        control={control}
        errors={errors}
        field="password"
        placeholder="Password"
        type="password"
      />
      <InputSection
        control={control}
        errors={errors}
        field="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <Button onClick={handleSubmit(onSubmit)}>Register</Button>
    </div>
  );
}
