import React from "react";
import { DefaultLayout } from "../layout/DefaultLayout";
import "./homepage.css";
import LandingPage from "../../components/landingPage/LandingPage";

export const Homepage = () => {
  return (
    <DefaultLayout>
      <LandingPage />
    </DefaultLayout>
  );
};
