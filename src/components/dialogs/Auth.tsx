import { AuthDialogProps } from "@app-types/parts";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export function Auth(props: AuthDialogProps) {
  const {
    open,
    onClose,
    loginTitle,
    registerTitle,
    resetPasswordTitle,
    loginDescription,
    registerDescription,
    resetPasswordDescription,
    loginChildren,
    registerChildren,
    resetPasswordChildren,
    loginButtonText,
    registerButtonText,
    resetPasswordButtonText,
  } = props;

  const [actualWindow, setActualWindow] = useState<
    "login" | "register" | "resetPassword"
  >("login");
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        <div className="flex w-full py-3 flex-row items-center space-x-3">
          <Button
            onClick={() => setActualWindow("login")}
            className={`${
              actualWindow === "login" ? "bg-gray-900" : ""
            } text-white flex-1`}>
            Login
          </Button>
          <Button
            onClick={() => setActualWindow("register")}
            className={`${
              actualWindow === "register" ? "bg-gray-900" : ""
            } text-white flex-1`}>
            Register
          </Button>
          <Button
            onClick={() => setActualWindow("resetPassword")}
            className={`${
              actualWindow === "resetPassword" ? "bg-gray-900" : ""
            } text-white flex-1`}>
            Reset Password
          </Button>
        </div>
        {actualWindow === "login"
          ? loginTitle
          : actualWindow === "register"
          ? registerTitle
          : resetPasswordTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {actualWindow === "login"
            ? loginDescription
            : actualWindow === "register"
            ? registerDescription
            : resetPasswordDescription}
        </DialogContentText>
        {actualWindow === "login" ? loginChildren : null}
        {actualWindow === "register" ? registerChildren : null}
        {actualWindow === "resetPassword" ? resetPasswordChildren : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
