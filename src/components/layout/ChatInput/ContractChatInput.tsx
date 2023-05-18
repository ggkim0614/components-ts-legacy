import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { InputBase, Paper } from "@material-ui/core";
import { AttachFile, CameraAltOutlined } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "../../ui";
import ContractForm from "../../../features/contract/ContractForm";
type ChatInputProps = {
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onSubmit?: (event: KeyboardEvent<HTMLDivElement>) => void;
  value?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "44px",
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      //height 44px to match the IconButton height
      padding: "8px 5px",
      opacity: 0.5,
    },
  })
);

export const ChatInput: FC<ChatInputProps> = ({
  onChange,
  onSubmit,
  value,
}: ChatInputProps) => {
  const classes = useStyles();

  const [addContract, setAddContract] = useState(false);
  const handleContractAdd = () => {
    setAddContract(true);
  }
  const handleClose = () => {
    setAddContract(false);
  }
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Type your message here."
        onChange={onChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSubmit && onSubmit(event);
          }
        }}
        value={value}
      />
      {/* <IconButton flat className={classes.iconButton}>
        <CameraAltOutlined />
      </IconButton> */}
      <IconButton flat className={classes.iconButton} onClick={handleContractAdd}>
        <AttachFile />
      </IconButton>

      <ContractForm open={addContract} onClose={handleClose}/>
    </Paper>
  );
};
