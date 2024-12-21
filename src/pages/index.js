import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
        <Layout>
            <Hero/>
            <Feature />
            <Pricing />
        </Layout>
    </>
  );
}
