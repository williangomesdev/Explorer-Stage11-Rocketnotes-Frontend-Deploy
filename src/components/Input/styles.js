import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 0.5rem;
  border-radius: 0.625rem;

  > input {
    height: 3.5rem;
    width: 100% auto;
    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1rem;
  }
`;
