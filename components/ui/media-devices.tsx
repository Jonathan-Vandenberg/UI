import React from "react";

import { useMediaDevices } from "../../hooks/useMediaDevices";

function Template() {
  const state = useMediaDevices();

  // User device info
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

export const ListDevices = Template.bind({});

export default Template;
