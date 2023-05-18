import React from "react";
import { FilledInput } from "./FilledInput";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|UI/FilledInput", // 스토리북에서 보여질 그룹과 경로를 명시
  component: FilledInput, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs] // 애드온 적용
};

export const ContainedInput = () => {
  return <FilledInput label="test" color="primary" />;
};

export const FullWidthInput = () => {
  return <FilledInput fullWidth label="test" color="secondary" />;
};

export const DecoratedInput = () => {
  return (
    <FilledInput
      startAdornment={<div style={{ paddingRight: 8 }}>$</div>}
      endAdornment={<div style={{ paddingRight: 8 }}>$</div>}
      label="test"
      color="secondary"
    />
  );
};
