import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCards } from "../../components/cards/ProductCards";
import { DefaultLayout } from "../layout/DefaultLayout";
import { fetchProdcutByCat } from "./ProductAction";

export const ProductByCat = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdcutByCat(_id));
  }, [_id]);

  const { products } = useSelector((state) => state.products);
  const { selectedCategory } = useSelector((state) => state.categories);
  return (
    <DefaultLayout>
      {/* {products?.length < 1 ? (
        <h3 className="text-center mt-5">No products found in this category</h3>
      ) : (
        <h3
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Products By Category {selectedCategory}
        </h3>
      )} */}
      <ProductCards products={products} />
    </DefaultLayout>
  );
};
