import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";

export const Container = styled.header`
  grid-area: header;
  height: 6.5625rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
