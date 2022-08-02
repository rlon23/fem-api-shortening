import React from "react";
import AdvancedStatistics from "../components/AdvancedStatistics";
import Layout from "./../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AdvancedStatistics />
    </Layout>
  );
}
