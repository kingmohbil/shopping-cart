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
    animation: fadeout 3s ease-out 1;
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
