import React from 'react'
import PropTypes from 'prop-types'

import Styles from 'modules/modal/components/modal-ledger/modal-ledger.styles'

const ModalNetworkMismatch = p => (
  <section className={Styles.ModalLedger}>
    <h1>Network Mismatch</h1>
    <span>The network set on the connected ethereum node does not match the contract network.</span>
    <span>Please set network to: {p.expectedNetwork}</span>
  </section>
)

ModalNetworkMismatch.propTypes = {
  expectedNetwork: PropTypes.number.isRequired
}

export default ModalNetworkMismatch
