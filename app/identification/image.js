// var request = require("request");
// var fs = require("fs");

// request.post(
//   {
//     url: "https://www.cutout.pro/api/v1/matting?mattingType=6",
//     formData: {
//       file: fs.createReadStream("/path/to/file.jpg"),
//     },
//     headers: {
//       APIKEY: "e1fb48b8a9a24ea9988a01b299ead5d6",
//     },
//     encoding: null,
//   },
//   function (error, response, body) {
//     // console.log(response);
//   }
// );

import fs from "fs";
import request from "request";

export default function handler(req, res) {
  const fileStream = fs.createReadStream("/path/to/file.jpg");
  const formData = {
    file: fileStream,
  };

  const options = {
    url: "https://www.cutout.pro/api/v1/matting?mattingType=6",
    formData,
    headers: {
      APIKEY: "e1fb48b8a9a24ea9988a01b299ead5d6",
    },
    encoding: null,
  };

  request.post(options, (error, response, body) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.status(response.statusCode).json(body);
    }
  });
}
