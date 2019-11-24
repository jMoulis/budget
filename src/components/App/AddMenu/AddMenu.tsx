import React from 'react';
import Income from 'components/Income/Income';
import styled from '@emotion/styled';
import MainContent from 'components/MainContent/MainContent';

interface Props {
  setMenu: () => void;
}

const Root = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LineBreak = styled.span`
  display: block;
  width: 8rem;
  height: 3px;
  background-color: gray;
  border-radius: 100rem;
  margin: 1rem;
`;

const AddMenu: React.FC<Props> = ({ setMenu }) => {
  return (
    <Root>
      <MainContent>
        <Income setMenu={setMenu} />
      </MainContent>
    </Root>
  );
};

export default AddMenu;
