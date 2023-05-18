import React from "react";
import { ProfileSkeleton } from "./ProfileSkeleton";
import { FeedSkeleton } from "./FeedSkeleton";
import { ChatSkeleton } from "./ChatSkeleton";

export default {
  title: "components|Layout/Skeletons",
  component: ChatSkeleton,
  FeedSkeleton,
  ProfileSkeleton,
};

export const DefaultFeedSkeleton = () => {
  return <FeedSkeleton />;
};

export const DefaultChatSkeleton = () => {
  return <ChatSkeleton />;
};

export const DefaultProfileSkeleton = () => {
  return <ProfileSkeleton />;
};
