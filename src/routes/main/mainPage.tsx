import React from "react";
import MainHeaderInterface from "../../components/interfaces/main/MainHeaderInterface";
import MainOutletInterface from "../../components/interfaces/main/MainOutletInterface";
import MainFooterInterface from "../../components/interfaces/main/MainFooterInterface";

export default function MainPage() {
  return (
    <React.Fragment>
      <MainHeaderInterface />
      <MainOutletInterface />
      <MainFooterInterface />
    </React.Fragment>
  );
}
