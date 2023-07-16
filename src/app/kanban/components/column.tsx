'use client'

import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import "./column.css";

interface CardProps {
  title: string;
  description: string;
  onMouseEnter?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledCard = styled(MuiCard)`
  width: 300px;
  margin: 7px;
`;

const Column: React.FC<CardProps> = ({ title, description, onMouseEnter}) => {
  const [open, setOpen] = React.useState(false);
  //const [title, setTitle] = React.useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(true);
  };


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <StyledCard elevation={16}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        <TextField
          id="outlined-basic"
          label="Enter task content"
          variant="outlined"
        />
        <div className="formbuttons">
          <Button variant="contained" onClick={handleClick} onMouseEnter={onMouseEnter}>
            Add Task
          </Button>
          <Button variant="contained">Cancel</Button>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Task added succesfully!
            </Alert>
          </Snackbar>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Column;
