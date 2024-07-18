import { useState, createContext } from "react";
import Button from "components/Button/Button";
import Section from "lessons/Lesson_13/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { UserData } from "./types";

export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };
    setUserData(userResponse);
  };

  return (
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
