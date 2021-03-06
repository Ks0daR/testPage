import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Spinner from "../Spinner";
import axios from "axios";

import { productSelectors, productOperations } from "../../redux/product";

import DessertsListItem from "./DessertListItem";
import styles from "./DessertsList.module.css";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const { dessertConainer, dessertsHeading, dessertList } = styles;

class DesertList extends Component {
  async componentDidMount() {
    try {
      this.props.onFetchProductDesserts("desserts");
    } catch (err) {
      console.log(err);
    }
  }
  async componentWillUnmount() {
    try {
      source.cancel("Operation canceled");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <div className={dessertConainer}>
        {isLoading && <Spinner />}
        <h2 className={dessertsHeading}>
          <FormattedMessage id="desserts" />
        </h2>
        <ul className={dessertList}>
          {products
            .filter(({ categories }) => categories === "desserts")
            .map((product) => (
              <DessertsListItem key={product._id} {...product} />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: productSelectors.getProducts(state),
    isLoading: productSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchProductDesserts: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesertList);
