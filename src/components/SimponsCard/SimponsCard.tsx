import { UserDataType } from "./types";

import { CardWrapper, CardItem, AvatarImg } from "./styles";

function SimponsCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: UserDataType) {
  return (
    <CardWrapper>
      <AvatarImg src={avatar} alt="Avatar" />
      <CardItem>Full name: {`${firstName} ${lastName}`}</CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
