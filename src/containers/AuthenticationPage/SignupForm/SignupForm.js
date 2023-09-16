import React from 'react';
import { bool, node } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';

import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import * as validators from '../../../util/validators';
import { Form, PrimaryButton, FieldTextInput, FieldCheckbox, FieldRadioButton } from '../../../components';

import css from './SignupForm.module.css';

const SignupFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        intl,
        termsAndConditions,
      } = fieldRenderProps;

      // email
      const emailRequired = validators.required(
        intl.formatMessage({
          id: 'SignupForm.emailRequired',
        })
      );
      const phoneRequired = validators.required(
        intl.formatMessage({
          id: 'SignupForm.phoneRequired',
        })
      );
      const billingAdrsRequired = validators.required(
        intl.formatMessage({
          id: 'SignupForm.phoneRequired',
        })
      );
      const emailValid = validators.emailFormatValid(
        intl.formatMessage({
          id: 'SignupForm.emailInvalid',
        })
      );
      //phone
      const phoneValid = validators.emailFormatValid(
        intl.formatMessage({
          id: 'SignupForm.phoneInvalid',
        })
      );
      const billingAdrsValid  = validators.billingAdrsValid (
        intl.formatMessage({
          id: 'SignupForm.billingInvalid',
        })
      );

      // password
      const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
      });
      const passwordMinLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooShort',
        },
        {
          minLength: validators.PASSWORD_MIN_LENGTH,
        }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooLong',
        },
        {
          maxLength: validators.PASSWORD_MAX_LENGTH,
        }
      );
      const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
      );
      const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
      );
      const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
      const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
      );

      const classes = classNames(rootClassName || css.root, className);
      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress;
      
      var isPersonal = false;

      const onValueChange = async values => {
        window.alert(values.value)
      }
      

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <div>
            <FieldTextInput
              type="email"
              id={formId ? `${formId}.email` : 'email'}
              name="email"
              autoComplete="email"
              label={intl.formatMessage({
                id: 'SignupForm.emailLabel',
              })}
              placeholder={intl.formatMessage({
                id: 'SignupForm.emailPlaceholder',
              })}
              validate={validators.composeValidators(emailRequired, emailValid)}
            />
            <div className={css.name}>
              <FieldTextInput
                className={css.firstNameRoot}
                type="text"
                id={formId ? `${formId}.fname` : 'fname'}
                name="fname"
                autoComplete="given-name"
                label={intl.formatMessage({
                  id: 'SignupForm.firstNameLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.firstNamePlaceholder',
                })}
                validate={validators.required(
                  intl.formatMessage({
                    id: 'SignupForm.firstNameRequired',
                  })
                )}
              />
              <FieldTextInput
                className={css.lastNameRoot}
                type="text"
                id={formId ? `${formId}.lname` : 'lname'}
                name="lname"
                autoComplete="family-name"
                label={intl.formatMessage({
                  id: 'SignupForm.lastNameLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.lastNamePlaceholder',
                })}
                validate={validators.required(
                  intl.formatMessage({
                    id: 'SignupForm.lastNameRequired',
                  })
                )}
              />
            </div>
            <div className={css.radioContainer}>
              <input className={css.radio} type="radio" value="Vendor" name="role" />I am a Vendor
              <div className={css.radio}></div>
              <input className={css.radio} type="radio" value="Buyer" name="role" /> I am a Buyer
            </div>
            <FieldTextInput
              type="phone"
              id={formId ? `${formId}.phone` : 'phone'}
              name="phone"
              autoComplete="phone"
              label={intl.formatMessage({
                id: 'Phone number',
              })}
              placeholder={intl.formatMessage({
                id: 'Your phone number',
              })}
              message="Your phone number"
              validate={validators.composeValidators(phoneRequired, phoneValid)}
            />

            <div className={css.formControl}>
              <FieldCheckbox 
                type="Age"
                id={formId ? `${formId}.age` : 'age'}
                name="age"
                label={intl.formatMessage({
                  id: 'I am 18 years or above',
                })}
              />
              
            </div>
           
            <div className={css.formControl}>
            <FieldTextInput
              type="billAddress"
              id={formId ? `${formId}.billAddress` : 'billAddress'}
              name="billAddress"
              autoComplete="billAddress"
              label={intl.formatMessage({
                id: 'BillingAddress',
              })}
              placeholder={intl.formatMessage({
                id: 'BillingAddress',
              })}
              validate={validators.composeValidators(billingAdrsRequired, billingAdrsValid )}
            />

            </div>
            <div className={css.formControl}>
              <FieldTextInput
                type="ShippingAddress"
                id={formId ? `${formId}.ShippingAddress` : 'ShippingAddress'}
                name="ShippingAddress"
                autoComplete="ShippingAddress"
                label={intl.formatMessage({
                  id: 'Shipping Address',
                })}
                placeholder={intl.formatMessage({
                  id: 'ShippingAddress',
                })}
                message="Shipping Address"
                validate={validators.composeValidators(billingAdrsRequired, billingAdrsValid )}
              />
            </div>
            <div className={css.radioContainer}>
              <input className={css.radio} type="radio" onChange={onValueChange} value="PersonalAccount" name="personal" />Personal
              <div className={css.radio}></div>
              <input className={css.radio} type="radio" onChange={onValueChange} value="BusinessAccount" name="personal" /> Business
            </div>

            

            <div className={css.formControl}>
              <FieldTextInput
                type="SSN"
                id={formId ? `${formId}.SSN` : 'SSN'}
                name="SSN"
                autoComplete="SSN"
                label={intl.formatMessage({
                  id: 'SSN',
                })}
                placeholder={intl.formatMessage({
                  id: 'SSN',
                })}
                validate={validators.composeValidators(billingAdrsRequired, billingAdrsValid )}
              />
            </div>

            <div className={css.formControl}>
              <FieldTextInput
                type="EIN"
                id={formId ? `${formId}.EIN` : 'EIN'}
                name="EIN"
                autoComplete="EIN"
                label={intl.formatMessage({
                  id: 'EIN',
                })}
                placeholder={intl.formatMessage({
                  id: 'EIN',
                })}
                validate={validators.composeValidators(billingAdrsRequired, billingAdrsValid )}
              />
            </div>

            
           
            
            <FieldTextInput
              className={css.password}
              type="password"
              id={formId ? `${formId}.password` : 'password'}
              name="password"
              autoComplete="new-password"
              label={intl.formatMessage({
                id: 'SignupForm.passwordLabel',
              })}
              placeholder={intl.formatMessage({
                id: 'SignupForm.passwordPlaceholder',
              })}
              validate={passwordValidators}
            />
          </div>

          <div className={css.bottomWrapper}>
            {termsAndConditions}
            <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
              <FormattedMessage id="SignupForm.signUp" />
            </PrimaryButton>
          </div>
        </Form>
      );
    }}
  />
);

SignupFormComponent.defaultProps = { inProgress: false };

SignupFormComponent.propTypes = {
  inProgress: bool,
  termsAndConditions: node.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
