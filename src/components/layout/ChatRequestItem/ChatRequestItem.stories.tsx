import React from "react";
import { ChatRequestItem } from "./ChatRequestItem";

export default {
  title: "components|Layout/ChatRequestItem",
  component: ChatRequestItem
};

export const DefaultRequestListItem = () => {
  return (
    <ChatRequestItem
      userType="user"
      userName="Gilbert Kim"
      requestDate="May 8"
      requestPastDate="D-4382"
    />
  );
};
