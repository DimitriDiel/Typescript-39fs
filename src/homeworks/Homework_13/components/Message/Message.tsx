import { useContext } from "react";
import { BlogManagementContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper } from "./styles";

function Message() {
  const messageForPost = useContext<string | undefined>(BlogManagementContext);

  return <MessageWrapper>{messageForPost}</MessageWrapper>;
}

export default Message;
