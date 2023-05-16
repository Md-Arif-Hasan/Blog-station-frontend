import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ submit, close }) {
  const handleSubmit = () => {
    submit();
    close();
  };
  return (
    <div>
      <Dialog open={true}>
        <DialogTitle id="alert-dialog-title">
          <b> {" Are you sure to perform this action?"} </b>
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={close}>
            {" "}
            <b> Cancel </b>
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            <b> Yes,Sure </b>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
