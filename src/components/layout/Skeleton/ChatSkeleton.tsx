import React from "react";
import { Box } from "@material-ui/core";
import { Skeleton as MuiSkeleton } from "@material-ui/lab";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 5,
      marginBottom: 10,
    },
  })
);

export const ChatSkeleton = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box display="flex">
        <Box>
          <MuiSkeleton variant="circle" width={56} height={56} />
        </Box>
        <Box width="100%" ml={1.5}>
          <MuiSkeleton
            width="70%"
            height={30}
            variant="rect"
            className={classes.root}
          />
          <MuiSkeleton
            width="45%"
            height={30}
            variant="rect"
            className={classes.root}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <MuiSkeleton
          variant="rect"
          height={30}
          width="60%"
          className={classes.root}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <MuiSkeleton
          variant="rect"
          height={30}
          width="40%"
          className={classes.root}
        />
      </Box>
      <Box display="flex" mt={2}>
        <Box>
          <MuiSkeleton variant="circle" width={56} height={56} />
        </Box>
        <Box width="100%" ml={1.5}>
          <MuiSkeleton
            width="70%"
            height={30}
            variant="rect"
            className={classes.root}
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <MuiSkeleton
          variant="rect"
          height={30}
          width="50%"
          className={classes.root}
        />
      </Box>
      <Box display="flex">
        <Box>
          <MuiSkeleton variant="circle" width={56} height={56} />
        </Box>
        <Box width="100%" ml={1.5}>
          <MuiSkeleton
            width="70%"
            height={30}
            variant="rect"
            className={classes.root}
          />
          <MuiSkeleton
            width="45%"
            height={30}
            variant="rect"
            className={classes.root}
          />
        </Box>
      </Box>
      <Box display="flex" mt={2}>
        <Box>
          <MuiSkeleton variant="circle" width={56} height={56} />
        </Box>
        <Box width="100%" ml={1.5}>
          <MuiSkeleton
            width="70%"
            height={30}
            variant="rect"
            className={classes.root}
          />
        </Box>
      </Box>
    </Box>
  );
};
