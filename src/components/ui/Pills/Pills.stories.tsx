import React from "react";
import { Pills } from "./Pills";

export default {
  title: "components|UI/Pills",
  component: Pills
};

export const FullWidthPills = () => {
  const [currentPill, setPill] = React.useState("all");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newPill: string
  ) => {
    // Enforce at least on value set
    if (newPill) {
      setPill(newPill);
    }
  };

  const pills = [
    {
      value: "all",
      label: "all"
    },
    {
      value: "company",
      label: "company"
    },
    {
      value: "people",
      label: "people"
    }
  ];

  return <Pills value={currentPill} onChange={handleChange} pills={pills} />;
};
