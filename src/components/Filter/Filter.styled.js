import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 600;
`;

export const StyledInput = styled.input`
  font-size: ${props => props.theme.fontSizes.s};
  width: 45px;
`;

export const StyledButton = styled.button`
  padding: ${props => props.theme.space[4]};
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.awesome};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.1rem;
  width: 70px;
  transition: 500ms;

  &:disabled {
    background-color: ${props => props.theme.colors.muted};
    color: ${props => props.theme.colors.black};
    border: ${props => props.theme.borders.none};
  }

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;
