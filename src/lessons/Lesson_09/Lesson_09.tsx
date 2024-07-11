import { useState, ChangeEvent, useEffect } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson_09Wrapper, InputControl, ButtonControl } from "./styles";

function Lesson_09() {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchInputValue(event.target.value);
  };

  const onSearch = () => {
    console.log(searchInputValue);
  };

  // 1. MOUNTING
  useEffect(() => {
    console.log("Mounting!!!");
  }, []);

  // 2. UPDATING
  useEffect(() => {
    console.log("Updating");
  }, [searchInputValue]);

  // 3. UNMOUNTING
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  return (
    <Lesson_09Wrapper>
      <InputControl>
        <Input
          id="search-input"
          label="Search"
          name="search"
          placeholder="Enter item for search"
          value={searchInputValue}
          onChange={onChangeInput}
        />
        {/* <input
          id="search-input"
          name="search"
          placeholder="Enter item for search"
          //   value - это значение самого инпута, т.е то значение котрое введет потенциальный пользователь
          value={searchInputValue}
          // onChange - функция, которая срабатывает, когда пользователь что-то вводит в инпут
          onChange={onChangeInput}
        /> */}
      </InputControl>
      <ButtonControl>
        <Button name="Search" onClick={onSearch} />
      </ButtonControl>
    </Lesson_09Wrapper>
  );
}

export default Lesson_09;
