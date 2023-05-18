import React from "react";
import { TabMenu } from "./TabMenu";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|UI/TabMenu",
  component: TabMenu
};

const tabs = ["THE CAREER SHOP", "PURCHASED"];

export const Default = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <TabMenu tabs={tabs} value={value} onChange={handleChange} />;
};
