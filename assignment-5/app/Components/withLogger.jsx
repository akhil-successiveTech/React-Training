"use client";

import { useEffect } from "react";

export default function withLogger(WrappedComponent) {
  return function LoggerWrapper(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`${WrappedComponent.name} updated`);
    });

    return <WrappedComponent {...props} />;
  };
}
