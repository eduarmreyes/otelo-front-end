import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import SpanInput from './SpanInput';
import validate from './validateForm';

/*
 * GetError() - Get any validation error messages on the form.
 * Return {message.key} - language key.
 */

/*
function getError(error) {
  let message = '';
  switch (error) {
    case 'required_error':
      message = 'Required';
      break;
    case 'invalid_error':
      message = 'Invalid';
      break;
    default:
      message = 'Required';
  }
  return message;
}
*/

const renderField = ({ input, placeholder, name, type, meta: { touched, error } }) => (
  <SpanInput>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      {...input}
    />
  </SpanInput>
);

const renderTextarea = ({ input, placeholder, name, type, meta: { touched, error } }) => (
  <Textarea
    type={type}
    name={name}
    placeholder={placeholder}
    {...input}
  >
  </Textarea>
);

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form
      id="contact-form"
      name="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <Field
        type="text"
        placeholder="NAME"
        name="name"
        id="name"
        component={renderField}
      />
      <Field
        type="text"
        placeholder="LAST NAME"
        name="last_name"
        id="last_name"
        component={renderField}
      />
      <Field
        type="email"
        placeholder="EMAIL"
        name="email"
        id="email"
        component={renderField}
      />
      <Field
        columns="600"
        placeholder="MESSAGE"
        name="message"
        id="message"
        component={renderTextarea}
      />
      <Button
        type="submit"
      >
        SUBMIT
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'contactForm',
  validate,
})(ContactForm);
