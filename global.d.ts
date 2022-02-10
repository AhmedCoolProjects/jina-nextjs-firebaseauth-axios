declare module "@app-types/parts" {
  export type AuthDialogProps = {
    open: boolean;
    onClose: () => void;
    registerTitle: string;
    loginTitle: string;
    resetPasswordTitle: string;
    registerDescription?: string;
    loginDescription?: string;
    resetPasswordDescription?: string;
    loginChildren: React.ReactNode;
    registerChildren: React.ReactNode;
    resetPasswordChildren: React.ReactNode;
    loginButtonText: string;
    registerButtonText: string;
    resetPasswordButtonText: string;
  };
  export type AuthInputs = {
    email: string;
    password: string;
    username?: string;
    confirmPassword?: string;
  };
}
