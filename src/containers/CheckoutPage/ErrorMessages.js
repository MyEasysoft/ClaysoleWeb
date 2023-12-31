import React from 'react';

import { FormattedMessage } from '../../util/reactIntl';
import {
  isTransactionInitiateAmountTooLowError,
  isTransactionInitiateMissingStripeAccountError,
  isTransactionInitiateBookingTimeNotAvailableError,
  isTransactionInitiateListingInsufficientStockError,
  isTransactionChargeDisabledError,
  isTransactionZeroPaymentError,
  isTransitionQuantityInfoMissingError,
  transactionInitiateOrderStripeErrors,
} from '../../util/errors';

// Collect error message checks to a single function.
export const getErrorMessages = (
  listingNotFound,
  initiateOrderError,
  isPaymentExpired,
  retrievePaymentIntentError,
  speculateTransactionError,
  listingLink
) => {
  let listingNotFoundErrorMessage = null;
  let initiateOrderErrorMessage = null;
  let speculateErrorMessage = null;

  const isAmountTooLowError = isTransactionInitiateAmountTooLowError(initiateOrderError);
  const isChargeDisabledError = isTransactionChargeDisabledError(initiateOrderError);
  const stripeErrors = transactionInitiateOrderStripeErrors(initiateOrderError);

  // We want to show one error at a time for the real transition
  if (listingNotFound) {
    listingNotFoundErrorMessage = <FormattedMessage id="CheckoutPage.listingNotFoundError" />;
  } else if (isAmountTooLowError) {
    initiateOrderErrorMessage = <FormattedMessage id="CheckoutPage.initiateOrderAmountTooLow" />;
  } else if (isTransactionInitiateBookingTimeNotAvailableError(initiateOrderError)) {
    // If bookings are used, there could be error related to those
    initiateOrderErrorMessage = (
      <FormattedMessage id="CheckoutPage.bookingTimeNotAvailableMessage" />
    );
  } else if (isTransitionQuantityInfoMissingError(initiateOrderError)) {
    initiateOrderErrorMessage = (
      <FormattedMessage id="CheckoutPage.correctQuantityInformationMissing" />
    );
  } else if (isTransactionInitiateListingInsufficientStockError(initiateOrderError)) {
    // If stock management is used, there could be error related to that
    initiateOrderErrorMessage = <FormattedMessage id="CheckoutPage.notEnoughStockMessage" />;
  } else if (isChargeDisabledError) {
    initiateOrderErrorMessage = <FormattedMessage id="CheckoutPage.chargeDisabledMessage" />;
  } else if (stripeErrors && stripeErrors.length > 0) {
    // NOTE: Error messages from Stripes are not part of translations.
    // By default they are in English.
    const stripeErrorsAsString = stripeErrors.join(', ');
    initiateOrderErrorMessage = (
      <FormattedMessage
        id="CheckoutPage.initiateOrderStripeError"
        values={{ stripeErrors: stripeErrorsAsString }}
      />
    );
  } else if (initiateOrderError) {
    // Generic initiate order error
    initiateOrderErrorMessage = (
      <FormattedMessage id="CheckoutPage.initiateOrderError" values={{ listingLink }} />
    );
  }

  // We want to show one error at a time for speculateTransition
  if (isTransactionInitiateMissingStripeAccountError(speculateTransactionError)) {
    speculateErrorMessage = (
      <FormattedMessage id="CheckoutPage.providerStripeAccountMissingError" />
    );
  } else if (isTransactionInitiateBookingTimeNotAvailableError(speculateTransactionError)) {
    speculateErrorMessage = <FormattedMessage id="CheckoutPage.bookingTimeNotAvailableMessage" />;
  } else if (isTransactionInitiateListingInsufficientStockError(speculateTransactionError)) {
    speculateErrorMessage = <FormattedMessage id="CheckoutPage.notEnoughStockMessage" />;
  } else if (isTransactionZeroPaymentError(speculateTransactionError)) {
    speculateErrorMessage = <FormattedMessage id="CheckoutPage.initiateOrderAmountTooLow" />;
  } else if (isTransitionQuantityInfoMissingError(speculateTransactionError)) {
    speculateErrorMessage = (
      <FormattedMessage id="CheckoutPage.correctQuantityInformationMissing" />
    );
  } else if (speculateTransactionError) {
    speculateErrorMessage = <FormattedMessage id="CheckoutPage.speculateFailedMessage" />;
  }

  // Add paragraph-container for the error message, if it exists
  const listingNotFoundErrorMessageParagraph = listingNotFoundErrorMessage ? (
    <p className={css.notFoundError}>{listingNotFoundErrorMessage}</p>
  ) : null;
  const initiateOrderErrorMessageParagraph = initiateOrderErrorMessage ? (
    <p className={css.orderError}>{initiateOrderErrorMessage}</p>
  ) : null;
  const speculateErrorMessageParagraph = speculateErrorMessage ? (
    <p className={css.orderError}>{speculateErrorMessage}</p>
  ) : null;
  const speculateTransactionErrorMessageParagraph = speculateTransactionError ? (
    <p className={css.speculateError}>
      <FormattedMessage id="CheckoutPage.speculateTransactionError" />
    </p>
  ) : null;

  // Stripe might throw error when retrieving payment intent
  const retrievePaymentIntentErrorMessageParagraph = retrievePaymentIntentError ? (
    <p className={css.orderError}>
      <FormattedMessage
        id="CheckoutPage.retrievingStripePaymentIntentFailed"
        values={{ listingLink }}
      />
    </p>
  ) : null;

  // Stripe related processes have payment expiration (15 min time-window to confirm the payment)
  const paymentExpiredMessageParagraph = isPaymentExpired ? (
    <p className={css.orderError}>
      <FormattedMessage id="CheckoutPage.paymentExpiredMessage" values={{ listingLink }} />
    </p>
  ) : null;

  return {
    listingNotFoundErrorMessage: listingNotFoundErrorMessageParagraph,
    initiateOrderErrorMessage: initiateOrderErrorMessageParagraph,
    paymentExpiredMessage: paymentExpiredMessageParagraph,
    retrievePaymentIntentErrorMessage: retrievePaymentIntentErrorMessageParagraph,
    speculateErrorMessage: speculateErrorMessageParagraph,
    speculateTransactionErrorMessage: speculateTransactionErrorMessageParagraph,
  };
};
