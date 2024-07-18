import { useContext } from "react";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";
import { UserData } from "lessons/Lesson_13/components/Main/types";

function Content() {
  const userData = useContext<UserData | undefined>(MainContext);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>{userData?.fullName}</ContentInfo>
      <ContentInfo>{userData?.age}</ContentInfo>
      <ContentInfo>{userData?.jobPosition}</ContentInfo>
    </ContentWrapper>
  );
}

export default Content;
