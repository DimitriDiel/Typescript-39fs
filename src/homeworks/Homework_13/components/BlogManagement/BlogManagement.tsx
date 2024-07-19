import { useState, createContext, ChangeEvent } from "react";

import Button from "components/Button/Button";

import { BlogManagementWrapper, TextArea } from "./styles";
import Card from "homeworks/Homework_13/components/Card/Card";

export const BlogManagementContext = createContext<string | undefined>("");

function BlogManagement() {
  const [message, setMessage] = useState<string>("");
  const [postedMessage, setPostedMessage] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const postMessage = () => {
    setPostedMessage(message);
  };

  return (
    <BlogManagementContext.Provider value={postedMessage}>
      <BlogManagementWrapper>
        <TextArea name="textArea" value={message} onChange={onChange} />
        <Button name="Запостить" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
