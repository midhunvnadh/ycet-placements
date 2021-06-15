const axios = require("axios").default;

export default async function handler(req, res) {
  var data = await axios.post("http://colormind.io/api/", {
    model: "default",
    input: ["N", [225, 225, 225], "N", [0, 0, 0], "N"],
  });
  data = data.data.result.map((one) => {
    return `rgba(${one[0]}, ${one[1]}, ${one[2]})`;
  });
  res.status(200).json(data);
}
