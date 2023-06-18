import React from "react";
import QRCode from "react-qr-code";

export default function GenerateQRCode() {
  // Fetching the current date
  const currentDate = new Date();

  // Calculating a date 3 months after the current date
  const futureDate = new Date();
  futureDate.setMonth(currentDate.getMonth() + 3);

  // Formatting the dates (optional)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedCurrentDate = currentDate.toLocaleDateString(
    undefined,
    options
  );
  const formattedFutureDate = futureDate.toLocaleDateString(undefined, options);

  // Outputting the results
  console.log("Current Date:", formattedCurrentDate);
  console.log("Date 3 Months Later:", formattedFutureDate);

  const userInfo = {
    name: "Jonathan Charles",
    surname: "van den Berg",
    ID: "839103741291",
    support: "0839283733",
    address: "123 Happy Street",
    birthCertificate: "143123123",
    issuer: "Issued by the Spanish Government",
    issueDate: formattedCurrentDate,
    expirationDate: formattedFutureDate,
    nationality: "Spanish",
    mother: "Nicole Margaret van den Berg",
    father: "Charles Hendrik van den Berg",
  };
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={JSON.stringify(userInfo)}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
