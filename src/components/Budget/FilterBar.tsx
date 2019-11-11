import React from 'react';
import styled from '@emotion/styled';

interface Props {
  onClick: (filter: string) => void;
  selectedFilter: string | null;
}

const Root = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

interface ListItemType {
  selected?: boolean;
}

const ListItem = styled.li<ListItemType>`
  padding: 1rem;
  flex: 1;
  text-align: center;
  text-decoration: ${({ selected }) => selected && 'underline'};
`;

const FilterBar: React.FC<Props> = ({ onClick, selectedFilter }) => {
  return (
    <Root>
      <ListItem
        selected={selectedFilter === 'income'}
        onClick={() => onClick('income')}
      >
        Incomes
      </ListItem>
      <ListItem
        selected={selectedFilter === 'expense'}
        onClick={() => onClick('expense')}
      >
        Expenses
      </ListItem>
      <ListItem selected={!selectedFilter} onClick={() => onClick(null)}>
        All
      </ListItem>
    </Root>
  );
};

export default FilterBar;
