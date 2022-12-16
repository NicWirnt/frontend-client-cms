import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { fetchSingleProductAction } from "./ProductAction";

export const ProductLanding = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    _id && dispatch(fetchSingleProductAction(_id));
  }, [_id]);

  return (
    <DefaultLayout>
      <h2>Product Information</h2>
    </DefaultLayout>
  );
};
