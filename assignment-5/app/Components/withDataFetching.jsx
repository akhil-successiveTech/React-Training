"use client";

import React from "react";

export default function withDataFetching(WrappedComponent) {
  return function WithData({ data }) {
    return <WrappedComponent data={data} />;
  };
}
