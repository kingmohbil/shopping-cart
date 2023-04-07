import styled from 'styled-components';

const ItemsContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  gap: 50px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 60px 120px 0;

  ::-webkit-scrollbar {
    width: 0.5vw;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #7775;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #777;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default ItemsContainer;
