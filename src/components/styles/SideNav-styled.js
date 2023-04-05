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
    animation: shine 5s linear 1;
  }

  /* TODO:: fixing animation for the links */

  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
`;

export default SideNav;
