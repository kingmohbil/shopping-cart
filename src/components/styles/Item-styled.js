import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 280px;
  padding-bottom: 18px;

  img {
    height: 280px;
    align-self: center;
    width: 230px;
    border-radius: 20px;
    transition: transform 1s;
    animation: 1s ease-in ${({ delay }) => delay}ms 1 normal both fadeOut;
  }

  img::selection {
    background: none;
  }

  img:hover {
    transform: rotate(-10deg) translateY(-10%);
  }

  .item-info p {
    font-weight: 300;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    color: #574240;
    padding: 0 4%;
    text-align: center;
    height: 60px;
  }

  p {
    color: #574240;
    font-family: var(--main-font);
    padding: 12px 4% 0;
    margin: 0;
    opacity: 0.7;
    font-size: 20px;
    text-align: center;
  }

  h3::selection,
  p::selection {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
  }

  @keyframes fadeOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default ItemContainer;
