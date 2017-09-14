import React from 'react';
import { connect } from 'react-redux';

import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSnapchatGhost from 'react-icons/lib/fa/snapchat-ghost';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import { sendContact } from './actions';

import Section from './Section';
import P from './P';
import Span from './Span';
import IconsWrapper from './IconsWrapper';
import FormWrapper from './FormWrapper';
import InfoWrapper from './InfoWrapper';
import SpanInfo from './SpanInfo';
import SectionMark from './SectionMark';
import ContactForm from './ContactForm';


export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <P>
          Leave us a message!
        </P>
        <IconsWrapper>
          <Span>
            <FaInstagram size="27" />
          </Span>
          <Span>
            <FaFacebook size="27" />
          </Span>
          <Span>
            <FaSnapchatGhost size="27" />
          </Span>
          <Span>
            <FaTwitter size="27" />
          </Span>
        </IconsWrapper>
        <FormWrapper>
          <ContactForm onSubmit={this.props.onSubmitForm} />
        </FormWrapper>
        <InfoWrapper>
          <SpanInfo>
            info@otelo.com
          </SpanInfo>
          <SpanInfo>
            1-800 373-3782
            <br />
            CR + 506 4635-2781
          </SpanInfo>
        </InfoWrapper>
        <SectionMark>
          &copy; Otelo Group LTDA
        </SectionMark>
      </Section>
    );
  }
}

Contact.propTypes = {
  name: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  message: React.PropTypes.string,
  onSubmitForm: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => {
      dispatch(sendContact(values, () => {
        console.log('Finished');
      }));
    },
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(Contact);
