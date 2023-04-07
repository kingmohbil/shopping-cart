import styled from 'styled-components';
import SharedStyles from './shared/sharedNavStyles';

const SideNav = styled.nav`
  ${SharedStyles}
  padding-top: 60px;
  padding-left: 70px;
  flex-direction: column;
  gap: 52px;

  a {
    font-size: 32px;
  }

  .active {
    opacity: 1;
  }

  :nth-child(1) {
    animation: 1s ease-in 100ms 1 normal both fadeout;
  }

  :nth-child(2) {
    animation: 1s ease-in 200ms 1 normal both fadeout;
  }

  :nth-child(3) {
    animation: 1s ease-in 300ms 1 normal both fadeout;
  }

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

export default SideNav;
