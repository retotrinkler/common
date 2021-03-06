// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import checkAddress from './check';
import checkAddressChecksum from './checkChecksum';
import createKeyMulti from './keyMulti';
import createKeyDerived from './keyDerived';
import decodeAddress from './decode';
import encodeAddress from './encode';
import encodeDerivedAddress from './encodeDerived';
import encodeMultiAddress from './encodeMulti';
import addressEq from './eq';
import setSS58Format from './setSS58Format';
import sortAddresses from './sort';

export {
  addressEq,
  checkAddress,
  checkAddressChecksum,
  createKeyDerived,
  createKeyMulti,
  decodeAddress,
  encodeAddress,
  encodeDerivedAddress,
  encodeMultiAddress,
  setSS58Format,
  sortAddresses
};
