import React from "react";
import { Grommet } from "grommet";
import config from "./config";

export default function Theme({ children }) {
  return <Grommet theme={config}>{children}</Grommet>;
}
