import React from "react";
import { useParams } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";

export const Category = () => {
  const { _id } = useParams();
  console.log(_id);

  return <DefaultLayout></DefaultLayout>;
};
