import { AuthInputs } from "@app-types/parts";
import { Input } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type InputSectionProps = {
  field: "email" | "password" | "username" | "confirmPassword";
  placeholder: string;
  control: Control<AuthInputs, object>;
  errors?: any;
  type: "email" | "password" | "text";
};
export default function InputSection(props_local: InputSectionProps) {
  const { field, placeholder, type, isSecured, control, errors } = props_local;
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            className="w-full"
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            value={value}
          />
        )}
        name={field}
      />
      {errors[field] && (
        <h1 className="text-red-500 text-sm">{errors[field]?.message}</h1>
      )}
    </>
  );
}
