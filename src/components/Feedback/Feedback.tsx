import Button from "components/Button/Button";

import {
  StyledFeedback,
  FeedbackControl,
  ButtonWithCountContainer,
  FeedbackCount,
} from "./styles";

interface FeedbackProps {
  like: number;
  dislike: number;
  onLike: () => void;
  onDislike: () => void;
  resetResults: () => void;
}

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <StyledFeedback>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <FeedbackCount>{like}</FeedbackCount>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <FeedbackCount>{dislike}</FeedbackCount>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </StyledFeedback>
  );
}

export default Feedback;
