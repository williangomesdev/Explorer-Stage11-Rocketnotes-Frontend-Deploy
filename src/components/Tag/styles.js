import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 0.3125rem 0.875rem;
  border-radius: 0.3125rem;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
