import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: inline-block;

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 600;
  margin-right: ${props => props.theme.space[4]};
`;

export const StyledInput = styled.input`
  margin-left: ${props => props.theme.space[4]};
`;
