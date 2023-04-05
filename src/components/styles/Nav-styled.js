import styled from 'styled-components';
import SharedStyles from './shared/sharedNavStyles';

const NavContainer = styled.nav`
  ${SharedStyles}
  grid-column: 1 / 3;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  font-style: italic;
  font-weight: 400;

  .header-link {
    font-weight: bold;
  }

  .links {
    display: flex;
    gap: 64px;
    font-style: normal;
  }

  h1::selection,
  span::selection {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
  }

  .cart-link {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 500px) {
    padding: 0 12px;

    .links {
      gap: 8px;
    }
  }
`;

export default NavContainer;
