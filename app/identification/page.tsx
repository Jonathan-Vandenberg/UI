"use client";

import QrScanner from "@/components/ui/QrScanner";
import Result from "@zxing/library/esm/core/Result";

import IdentificationInfo from "@/components/ui/identification-info.";
import { SetStateAction, useState } from "react";
import { captureAndSendImage } from "../../api/profile-image";

export default function Page() {
  const initData = {
    name: "",
    surname: "",
    ID: "",
    support: "",
    address: "",
    birthCertificate: "",
    issuer: "",
    issueDate: "",
    expirationDate: "",
    nationality: "",
    mother: "",
    father: "",
  };

  const [data, setData] = useState<Result>();
  const [information, setInformation] = useState(initData);
  const [hidden, setHidden] = useState(false);

  const handleCapture = (imageData: any) => {
    captureAndSendImage();
    console.log(imageData);
  };

  return (
    <div className="h-full w-full">
      {!hidden && (
        <QrScanner
          onResult={(result: SetStateAction<Result | undefined>) => {
            setData(result);
            setHidden(true);
          }}
          onDecode={(decode) => {
            const userInfo = JSON.parse(decode);
            setInformation(userInfo);
          }}
          onError={(error: { message: string }) => {
            console.log("onError" + error?.message);
          }}
        />
      )}
      <IdentificationInfo information={information} />
      {/* <GenerateQRCode /> */}
    </div>
  );
}
