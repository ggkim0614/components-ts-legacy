import React, { FC, ReactNode } from "react";
import { Box, BoxProps } from "@material-ui/core";

type VerticalCenterProps = {
  /** Components to be vertically center aligned */
  children?: ReactNode;
  /** Set if the components should be spread out to the end
   *
   * `space-between`: Unifies the gap between elements
   *
   * `space-evenly`: Unifies the gap between elements AND the gap between the row's ends
   *
   * `space-around`: Unifies the gap between the the row's ends
   */
  justify?: "space-between" | "space-evenly" | "space-around";
  /** Set if the components should be align to top, bottom, or center
   *
   * `flex-start`: Align to top
   *
   * `flex-end`: Align to bottom
   *
   * `center`: Align to center
   */
  align?: "flex-start" | "flex-end" | "center";
  /** CSS stylename */
} & BoxProps;

/** Use this component and wrap other components you want to vertically align center */
export const VerticalCenter: FC<VerticalCenterProps> = (
  props: VerticalCenterProps
) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems={props.align}
      justifyContent={props.justify ? props.justify : ""}
      {...props}
    >
      {props.children}
    </Box>
  );
};

VerticalCenter.defaultProps = {
  align: "center"
};
