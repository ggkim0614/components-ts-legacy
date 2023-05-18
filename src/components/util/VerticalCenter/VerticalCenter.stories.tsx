import React from "react";
import { VerticalCenter } from "./VerticalCenter";

export default {
  title: "components|Util/VerticalCenter", // 스토리북에서 보여질 그룹과 경로를 명시
  component: VerticalCenter, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [] // 애드온 적용
};

export const DefaultExample = () => {
  return (
    <VerticalCenter>
      <h1>1</h1>
      <h1>2</h1>
    </VerticalCenter>
  );
};

export const SpaceBetweenWithTwoExample = () => {
  return (
    <VerticalCenter justify="space-between">
      <h1>1</h1>
      <h1>2</h1>
    </VerticalCenter>
  );
};

export const SpaceBetweenWithFourExample = () => {
  return (
    <VerticalCenter justify="space-between">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
    </VerticalCenter>
  );
};

export const SpaceAroundWithFourExample = () => {
  return (
    <VerticalCenter justify="space-around">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
    </VerticalCenter>
  );
};

export const SpaceEvenlyWithFourExample = () => {
  return (
    <VerticalCenter justify="space-evenly">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
    </VerticalCenter>
  );
};
