// @flow
/* eslint-disable prefer-default-export */
import { REGEXP_ADDRESS } from 'lbryURI';

type DraftTxValues = {
  address: string,
  // amount: number
}

export const validateSendTx = (formValues: DraftTxValues) => {
  const { address } = formValues
  const errors = {};

  // All we need to check is if the address is valid
  // If values are missing, users wont' be able to submit the form
  if (address && !REGEXP_ADDRESS.test(address)) {
    errors.address = __('Not a valid LBRY address');
  }

  return errors;
};

/* eslint-enable prefer-default-export */