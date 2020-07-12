import React from "react";
import Head from "next/head";

export default props => {
  return (
    <>
      <Head>
        <title>Sample Page</title>
      </Head>
      <div>sample id: {props.url.query.id}</div>
    </>
  );
};
