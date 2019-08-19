import React from 'react';
import { HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import HomepageVideo from '../../components/HomepageVideo';

// Component to be shadowed

const FirstLeftText = () => (
  <p>
    {"Hi, I'm"}&nbsp;<em>Cameron</em>
  </p>
);

const FirstRightText = () => (
  <p>
    <strong>Who Am I?</strong>
    <br />I am a software engineer specializing in writing clean, scalable{' '}
    <em>Python</em> code and <em>Django</em> web applications. I make things
    from scratch, contribute to open source, and develop software with the end
    user's needs in mind.
  </p>
);

const customProps = {
  Banner: (
    <HomepageVideo
      src="/videos/hero-video-min.mp4"
      poster="/images/hero-video-poster.jpg"
    />
  ),
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
