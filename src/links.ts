import LinkType from './components/styles/shared/LinkType';

const LinksInfo: LinkType[] = [
  {
    name: 'Men',
    path: '/products/men',
    active: false,
  },
  {
    name: 'Women',
    path: '/products/women',
    active: false,
  },
  {
    name: 'Unisex',
    path: '/products/unisex',
    active: false,
  },
];

export const MenLinks: LinkType[] = [
  {
    name: 'Men',
    path: '/products/men',
    active: true,
  },
  ...LinksInfo.slice(1),
];

export const WomenLinks: LinkType[] = [
  ...LinksInfo.slice(0, 1),
  {
    name: 'Women',
    path: 'products/women',
    active: true,
  },
  ...LinksInfo.slice(2),
];

export const UnisexLinks: LinkType[] = [
  ...LinksInfo.slice(0, 2),
  {
    name: 'Unisex',
    path: 'products/unisex',
    active: true,
  },
];
