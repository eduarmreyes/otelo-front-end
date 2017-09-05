import React from 'react';

import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSnapchatGhost from 'react-icons/lib/fa/snapchat-ghost';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

import Section from './Section';
import P from './P';
import Span from './Span';
import IconsWrapper from './IconsWrapper';
import FormWrapper from './FormWrapper';
import Input from './Input';
import Textarea from './Textarea';

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <P>
          Leave us two message!
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
          <form>
            <Input type="text" placeholder="NAME" />
            <Input type="text" placeholder="LAST NAME" />
            <Input type="email" placeholder="EMAIL" />
            <Textarea columns="600" placeholder="COMMENTS">
            </Textarea>
          </form>
        </FormWrapper>
      </Section>
    );
  }
}

export default Contact;
