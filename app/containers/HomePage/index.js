/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Jumbotron from 'components/Jumbotron';
import Welcome from 'components/Welcome';
import FeaturedStays from 'components/FeaturedStays';
import TheNetwork from 'components/TheNetwork';
import UpcomingDestinations from 'components/UpcomingDestinations';

import React from 'react';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Jumbotron />
        <Welcome />
        <FeaturedStays />
        <TheNetwork />
        <UpcomingDestinations />
      </div>
    );
  }
}
