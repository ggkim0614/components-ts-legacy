import React, { FC } from "react";
import clsx from "clsx";
import { Box, Paper, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "16px 0",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
    },
    tags: {
      paddingRight: 10,
    },
    matched: {
      color: theme.palette.primary.main,
    },
  })
);

export const ContractCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h2">귤 30박스</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h3">계약 비용:</Typography>
          <Typography variant="body1">금 100,000,000원정</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h3">계약 기간:</Typography>
          <Typography variant="body1">2018/09/17 ~ 2020/08/27</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
