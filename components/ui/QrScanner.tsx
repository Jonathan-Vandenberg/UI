import React from "react";

import { QrScanner, QrScannerProps } from "./qr-scanner";
import { defaultConstraints } from "../../misc/default-constraints";

const styles = {
  container: {
    width: 400,
    margin: "auto",
  },
};

function Template(args: QrScannerProps) {
  return (
    <div style={styles.container}>
      <QrScanner
        onError={function (error: Error): void {
          throw new Error("Function not implemented.");
        }} // {...args}
        // onResult={(result) => {
        //   action("onResult")(result);
        // }}
        // onDecode={(result) => {
        //   action("onDecode")(result);
        // }}
        // onError={(error) => {
        //   action("onError")(error?.message);
        // }}
      />
    </div>
  );
}

export const ScanCode = Template.bind({});

// @ts-ignore
ScanCode.args = {
  scanDelay: 100,
  tracker: true,
  hideCount: false,
  constraints: defaultConstraints,
  deviceId: "",
};

export default QrScanner;
