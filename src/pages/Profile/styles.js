import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 7.75rem;

    button {
      background: none;
      border: none;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -7.75rem auto 2rem;
  width: 11.625rem;
  height: 11.625rem;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.4375rem;
    right: 0.4375rem;
    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
