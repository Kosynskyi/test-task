import styled from 'styled-components';

export const StyledTable = styled.table`
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
  width: 300px;
`;

export const TableRowsHead = styled.tr`
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
`;

export const TableRows = styled.tr`
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
  transition: 500ms;

  &:hover {
    transform: scale(1.03);
  }
`;

export const TableData = styled.td`
  padding: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
  cursor: pointer;
`;

export const TableHeadTitle = styled.th`
  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
  text-align: center;
`;
