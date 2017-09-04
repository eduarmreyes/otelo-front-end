import React from 'react';

import Section from 'components/Welcome/Section';
import Hr from 'components/Welcome/Hr';
import Container from 'components/Container';

import FeaturedList from './FeaturedList';

class FeaturedStays extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Container>
          <h2>
            Featured Otelo Stays
          </h2>
          <FeaturedList />
          <Hr />
        </Container>
      </Section>
    );
  }
}

export default FeaturedStays;
