import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { logoutFct } from "../../functions";
import { logoutAction, useAppDispatch } from "../../store";

type LogoutDialogProps = {
  open: boolean;
  onClose: () => void;
  userName?: string;
};

export function LogoutDialog(props: LogoutDialogProps) {
  const { open, onClose, userName } = props;
  const dispatch = useAppDispatch();
  const submitLogout = () => {
    logoutFct();
    dispatch(logoutAction());
    onClose();
  };

  return (
    <Dialog
      maxWidth="md"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {`wanna logout? ${userName}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={submitLogout}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
}
