import React, { FC, ReactNode } from "react";
import {
  FormControl,
  FilledInput as MuiFilledInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton } from "../IconButton/IconButton";

type InputProps = {
  /** Label to show as a placeholder */
  label: string;
  /** Input field color */
  color?: "primary" | "secondary";
  /** Function to be called on input value change */
  onChange?: (any) => void;
  /** Set the width of the input to max of its container */
  fullWidth?: boolean;
  /** Set the input field type; setting it to `password` will show the toggleShowPassword icon */
  type?: "email" | "password" | "phone" | "text";
  /** Text or decoration in the `beginning` */
  startAdornment?: ReactNode;
  /** Text or decoration in the `end` */
  endAdornment?: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 5
    },
    input: {
      padding: 12
    },
    label: {
      lineHeight: 0
    },
    labelNone: {
      display: "none"
    },
    icon: {
      opacity: 0.5
    }
  })
);

/**
 * Use `Input` when you want to receive text input
 *
 * - setting `variant` value to `filled` will remove the outline and fill the background
 */
export const FilledInput: FC<InputProps> = ({
  label,
  color,
  fullWidth,
  onChange,
  type,
  startAdornment,
  endAdornment,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === "password";
  const classes = useStyles();

  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <InputLabel
        classes={{ root: classes.label, shrink: classes.labelNone }}
        color={color}
      >
        {label}
      </InputLabel>
      <MuiFilledInput
        classes={{ root: classes.root, input: classes.input }}
        color={color}
        disableUnderline
        endAdornment={
          isPasswordField ? (
            <InputAdornment position="end">
              <IconButton flat onClick={handleClickShowPassword} size="small">
                {showPassword ? (
                  <Visibility className={classes.icon} />
                ) : (
                  <VisibilityOff className={classes.icon} />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            endAdornment
          )
        }
        onChange={onChange}
        startAdornment={startAdornment}
        type={isPasswordField ? (showPassword ? "text" : "password") : type}
        {...props}
      />
    </FormControl>
  );
};

FilledInput.defaultProps = {
  color: "primary",
  type: "text"
};
