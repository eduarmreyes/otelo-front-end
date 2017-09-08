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
import InfoWrapper from './InfoWrapper';
import SpanInfo from './SpanInfo';
import Button from './Button';
import SectionMark from './SectionMark';

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
          <form>
            <Input type="text" placeholder="NAME" />
            <Input type="text" placeholder="LAST NAME" />
            <Input type="email" placeholder="EMAIL" />
            <Textarea columns="600" placeholder="COMMENTS">
            </Textarea>
            <Button>
              SUBMIT
            </Button>
          </form>
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

export default Contact;
