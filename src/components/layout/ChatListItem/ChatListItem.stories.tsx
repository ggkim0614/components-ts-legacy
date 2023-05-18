import React from "react";
import { ChatListItem } from "./ChatListItem";

export default {
  title: "components|Layout/ChatListItem",
  component: ChatListItem
};

export const DefaultChatListItem = () => {
  return (
    <ChatListItem
      userType="user"
      userName="John Cena"
      userPosition="UX Designer"
      chatMessage="Please verify your email address to access all of our cool features."
      chatDate="10:51 pm"
      chatUnreadCount={0}
    />
  );
};
