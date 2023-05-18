import React from "react";
import { Select } from "./Select";

export default {
  title: "components|UI/Select", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Select // 어떤 컴포넌트를 문서화 할지 명시
};

const options = [
  {
    label: "India",
    value: "india"
  },
  {
    label: "South Korea",
    value: "southKorea"
  }
];

export const DefaultSelect = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Select label="Location" options={options} onChange={handleChange} value={age} />
  );
};
