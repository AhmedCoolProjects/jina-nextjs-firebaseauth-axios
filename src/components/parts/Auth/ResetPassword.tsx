import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthInputs } from "@app-types/parts";
import { resetPasswordFct } from "../../../functions";
import InputSection from "./InputSection";
import { Button } from "@mui/material";

export function ResetPassword() {
  const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<AuthInputs> = (data) => {
    resetPasswordFct({
      email: data.email,
    });
  };
  return (
    <div className="space-y-3">
      <InputSection
        control={control}
        errors={errors}
        field="email"
        placeholder="Email"
        type="email"
      />
      <Button onClick={handleSubmit(onSubmit)}>Send Reset Link</Button>
    </div>
  );
}
