import { LoadingOverlay, Spinner, SpinnerContainer } from "./style/load-style";

export const LoadingScreen = () => {
  return (
    <LoadingOverlay>
      <SpinnerContainer>
        <Spinner></Spinner>
      </SpinnerContainer>
    </LoadingOverlay>
  );
};
