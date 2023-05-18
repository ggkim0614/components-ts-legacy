import React from "react";
import { OutlinedInput } from "./OutlinedInput";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|UI/Outlined Input", // 스토리북에서 보여질 그룹과 경로를 명시
  component: OutlinedInput, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs] // 애드온 적용
};

export const DefaultOutlinedInput = () => {
  return <OutlinedInput label="test" color="primary" />;
};

export const FullWidthOutlinedInput = () => {
  return <OutlinedInput fullWidth label="test" color="secondary" />;
};

export const DecoratedOutlinedInput = () => {
  return (
    <OutlinedInput
      startAdornment={<div style={{ paddingRight: 8 }}>$</div>}
      endAdornment={<div style={{ paddingRight: 8 }}>$</div>}
      label="test"
      color="secondary"
    />
  );
};
