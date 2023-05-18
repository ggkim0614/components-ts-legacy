import React, { FC, ReactNode } from "react";
import {
  FormControl,
  FormHelperText,
  OutlinedInput as MuiOutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton } from "../IconButton/IconButton";

type InputProps = {
  /** Input field color */
  color?: "primary" | "secondary";
  /** Is disabled */
  disabled?: boolean;
  /** Text or decoration in the `end` */
  endAdornment?: ReactNode;
  /** Set to `true` if there's an error with the input */
  error?: boolean;
  /** Set the width of the input to max of its container */
  fullWidth?: boolean;
  /** Helpertext to explain about the form; will turn red when error is set to tru */
  helperText?: string;
  /** Label to show as a placeholder */
  label: string;
  /** Name attribute of the input element.  */
  name?: string;
  /** Function to be called on input value change */
  onChange?: (event: any) => void;
  /** Text or decoration in the `beginning` */
  startAdornment?: ReactNode;
  /** Set the input field type; setting it to `password` will show the toggleShowPassword icon */
  type?: "email" | "password" | "phone" | "text";
  /** Value of the input */
  value?: string;
  
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      height: 44
    },
    icon: {
      opacity: 0.5
    },
    labelDisabled: {
      top: -6
    },
    labelShrink: {
      transform: "translate(14px, 0) scale(0.75) !important"
    }
  })
);

/**
 * Use `Input` when you want to receive text input
 *
 * - setting `variant` value to `filled` will remove the outline and fill the background
 */
export const OutlinedInput: FC<InputProps> = ({
  color,
  disabled,
  endAdornment,
  error,
  fullWidth,
  helperText,
  label,
  name,
  onChange,
  startAdornment,
  type,
  value,
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
        classes={{ root: classes.labelDisabled, shrink: classes.labelShrink }}
        color={color}
      >
        {label}
      </InputLabel>
      <MuiOutlinedInput
        className={classes.input}
        color={color}
        disabled={disabled}
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
        label={label}
        name={name}
        onChange={onChange}
        startAdornment={startAdornment}
        type={isPasswordField ? (showPassword ? "text" : "password") : type}
        value={value}
        {...props}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

OutlinedInput.defaultProps = {
  color: "primary",
  type: "text"
};
