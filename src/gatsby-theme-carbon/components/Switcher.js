import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';

const links = [
  { href: '#', linkText: 'IBM Design' },
  {
    href: '#',
    linkText: 'IBM Design Language',
  },
  {
    href: '#',
    linkText: 'IBM Product Design',
  },

];

const CustomSwitcher = () => <Switcher links={links} />;

export default CustomSwitcher;
