import React, { FC, MouseEvent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import grey from "@material-ui/core/colors/grey";

export type Pill = {
  value: string;
  /** Label will be capitalized */
  label: string;
};

type PillsProps = {
  /** Array of pills that have `value` and `label` */
  pills: Array<Pill>;
  /** Current value of the pill group */
  value: number | string;
  /** Change handler function to change the pill value */
  onChange: (event: MouseEvent<HTMLElement>, newAlignment: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
    },
    button: {
      color: grey[500],
      background: grey[100],
      width: "100%",
      border: 0,
      padding: 8,
      textTransform: "capitalize",
      fontWeight: 400,
    },
    selected: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white !important",
    },
  })
);

export const Pills: FC<PillsProps> = ({
  pills,
  value,
  onChange,
}: PillsProps) => {
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      className={classes.container}
      value={value}
      exclusive
      onChange={onChange}
    >
      {pills.map((pill, key) => {
        return (
          <ToggleButton
            key={key}
            classes={{
              root: classes.button,
              selected: classes.selected,
            }}
            value={pill.value}
          >
            {pill.label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

Pills.defaultProps = {
  pills: [],
};
