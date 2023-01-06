import styled from 'styled-components';

export const StyledTable = styled.table`
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.effect};
  width: 300px;
`;

export const TableData = styled.td`
  padding: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  border: 1px solid rgba(139, 0, 195, 0.21);
  text-align: left;
`;

export const TableHeadTitle = styled.th`
  padding: ${props => props.theme.space[3]}px;
  border: 1px solid rgba(139, 0, 195, 0.21);
  text-align: center;
`;
