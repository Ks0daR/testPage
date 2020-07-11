import React from "react";
import { useSelector } from "react-redux";
import { productSelectors } from "../../redux/product";
import { FormattedMessage } from "react-intl";

import PizzaListItem from "../PizzaListItem/PizzaListItemHooks";
import Spinner from "../Spinner";
// import productsJSON from "../../services/products.json";
import styles from "./PizzaList.module.css";

export default function PizzaListForTest({ products }) {
  const local = useSelector((state) => state.local.lang);
  const isLoading = useSelector(productSelectors.getLoading);

  return (
    <div className={styles.pizzaListWrapper}>
      {isLoading && <Spinner />}
      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.classic" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "classic") {
            return <PizzaListItem {...product} key={index} local={local} />;
          }
        })}
      </ul>
      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.special" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "branded") {
            return <PizzaListItem {...product} key={index} local={local} />;
          }
        })}
      </ul>

      <h2 className={styles.pizzaHeading}>
        <FormattedMessage id="pizza.premium" />
      </h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "premium") {
            return <PizzaListItem {...product} key={index} local={local} />;
          }
        })}
      </ul>
    </div>
  );
}
