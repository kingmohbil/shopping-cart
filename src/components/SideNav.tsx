import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from './styles/SideNav-styled';
import LinkType from './styles/shared/LinkType';

interface LinkInterface {
  Links: LinkType[];
}
const SideNav: React.FC<LinkInterface> = ({ Links }) => {
  return (
    <SideNavContainer>
      {Links.map((link: LinkType) => (
        <Link
          className={link.active ? 'active' : ''}
          to={link.path}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </SideNavContainer>
  );
};

export default SideNav;
