import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";

type TabMenuProps = {
  /** Array of Tab labels */
  tabs?: Array<string>;
  /** Currently Selected Tab */
  value: number;
  /** Handler invoked when a tab changes */
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "0",
      fontSize: "1rem",
      fontWeight: "bold",
      opacity: 1,
      color: theme.palette.text.disabled,
      marginRight: 20
    },
    selected: {
      color: "black"
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      bottom: 6,
      height: 6,
      "& > div": {
        maxWidth: 6,
        borderRadius: 3,
        width: "100%",
        backgroundColor: theme.palette.primary.main
      }
    }
  })
);

export const TabMenu: FC<TabMenuProps> = ({
  tabs,
  value,
  onChange
}: TabMenuProps) => {
  const classes = useStyles();

  return (
    <Tabs
      classes={{ indicator: classes.indicator }}
      value={value}
      onChange={onChange}
      TabIndicatorProps={{ children: <div /> }}
      variant="scrollable"
      selectionFollowsFocus
    >
      {tabs.map((tab, key) => {
        return (
          <Tab
            key={key}
            classes={{ root: classes.root, selected: classes.selected }}
            disableRipple
            label={tab}
          />
        );
      })}
    </Tabs>
  );
};

TabMenu.defaultProps = {
  tabs: []
};

export default TabMenu;
