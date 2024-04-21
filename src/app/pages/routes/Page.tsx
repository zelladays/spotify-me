import React, { useEffect } from "react";

export const Page = (props: React.PropsWithChildren<{ title: string }>) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return <>{props.children}</>;
};
