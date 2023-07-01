import React, { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return <div className="px-3 py-6">{children}</div>;
}

export default Container;
