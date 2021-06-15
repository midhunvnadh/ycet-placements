const fs = require("fs");
const fsPromises = fs.promises;
var path = require("path");
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const projectROOT = getConfig().serverRuntimeConfig.PROJECT_ROOT;

var theFolder = path.resolve(`./public/students/photos`);

export default async function handler(req, res) {
  const response = [];
  const files = await fsPromises.readdir(theFolder);

  files.forEach((file) => {
    response.push({
      student_name: file.split("-")[0].trim(),
      student_photo_path: "/students/photos/" + file,
      company_logo_path:
        "/students/companies/" +
        file.split("-")[1].replace(".jpeg", "").trim() +
        ".png",
    });
  });
  res.status(200).json(response);
}
