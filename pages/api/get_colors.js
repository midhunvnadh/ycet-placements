export default async function handler(req, res) {
  var items = require("nice-color-palettes");
  var item = items[Math.floor(Math.random() * items.length)];
  res.status(200).json(item);
}
