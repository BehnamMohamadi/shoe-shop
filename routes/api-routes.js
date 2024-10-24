const router = require("express").Router();
const { join } = require("node:path");

const shoeProducts = require("../dbs/shoes-products-dbs.json");

router.get("/", (request, response) => {
  response.status(200).send("...");
});

router.get("/products", (request, response) => {
  const { searchword } = request.query;
  const filterShoes = shoeProducts.filter((product) => {
    return (
      product.price.includes(searchword) ||
      product.color.includes(searchword) ||
      product.size.includes(searchword) ||
      product.quality.includes(searchword)
    );
  });
  // response.status(200).json({ status: 200, data: filterShoes });
  response.status(200).render(join(__dirname, "../views/search-page.ejs"), {
    filterShoes,
    searchword,
  });
});

module.exports = router;
