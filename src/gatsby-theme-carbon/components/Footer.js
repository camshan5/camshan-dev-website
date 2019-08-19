import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
// eslint-disable-next-line import/no-webpack-loader-syntax
import timestamp from 'raw-loader!../../../build-timestamp';

const currentYear = new Date().getFullYear();
const lastUpdated = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date(Number(timestamp)));

const Content = () => (
  <>
    <p>
      Last updated {lastUpdated}
      <br />
      Copyright © {currentYear} Cameron Shannon
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://twitter.com/camshan5', linkText: 'Twitter' },
    { href: 'https://github.com/camshan5', linkText: 'Github' },
  ],
  secondCol: [

  ],
};

const CustomFooter = props => (
  <Footer {...props} links={links} Content={Content} />
);

export default CustomFooter;
