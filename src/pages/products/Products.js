import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCards } from "../../components/cards/ProductCards";
import { DefaultLayout } from "../layout/DefaultLayout";
import { fetchProductsAction } from "./ProductAction";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const { products } = useSelector((state) => state.products);

  return (
    <DefaultLayout>
      <ProductCards products={products} />
    </DefaultLayout>
  );
};
