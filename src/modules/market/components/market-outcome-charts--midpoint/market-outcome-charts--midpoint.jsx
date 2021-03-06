import React from "react";
import PropTypes from "prop-types";
import Styles from "modules/market/components/market-outcome-charts--midpoint/market-outcome-charts--midpoint.styles";

const Midpoint = props => {
  const { orderBookKeys, fixedPrecision, hasOrders } = props;

  return (
    <section>
      {hasOrders && (
        <div className={Styles.MarketOutcomeMidpoint}>
          <div className={Styles.MarketOutcomeMidpointLine} />
          <div className={Styles.MarketOutcomeMidpointValue}>
            {`${orderBookKeys.mid.toFixed(fixedPrecision)} ETH`}
          </div>
        </div>
      )}
      {!hasOrders && (
        <div className={Styles.MarketOutcomeMidpointNullState}>
          No Open Orders
        </div>
      )}
    </section>
  );
};

Midpoint.propTypes = {
  orderBookKeys: PropTypes.object.isRequired,
  hasOrders: PropTypes.bool.isRequired,
  fixedPrecision: PropTypes.number.isRequired
};

export default Midpoint;
