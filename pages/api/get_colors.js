export default async function handler(req, res) {
  res.status(200).json(planB());
}

function planB() {
  var items = require("nice-color-palettes");
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}
