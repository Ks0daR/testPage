import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { productSelectors, productOperations } from "../../redux/product";

import SidesListItem from "../SidesListItem/SidesListItem";
import styles from "../DrinkList/drinkList.module.css";

class SidesList extends Component {
  componentDidMount() {
    this.props.onFetchProductSides("sides");
  }
  render() {
    const { products } = this.props;
    return (
      <div className={styles.containerList}>
        <h1 className={styles.title}>
          <FormattedMessage id="sides" />
        </h1>
        <ul className={styles.menu}>
          {products.map((product) => (
            <SidesListItem key={product._id} {...product} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductSides: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidesList);
