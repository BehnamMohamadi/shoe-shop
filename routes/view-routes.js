const router = require("express").Router();
const { join } = require("node:path");
const shoeProducts = require("../dbs/shoes-products-dbs.json");
const AppError = require("../utils/app-error.js");

router.get("/", (request, response) => {
  response.status(200).send("view");
});

router.get("/products", (request, response) => {
  response.status(200).render(join(__dirname, "../views/landing-page.ejs"), {
    shoeProducts,
  });
});

router.get("/product/:id", (request, response, next) => {
  const { id } = request.params;

  const product = shoeProducts.find((product) => product.id === id);
  if (!product) {
    next(AppError(404, `id=${id} not-found`));
  }
  response.status(200).render(join(__dirname, "../views/product-page.ejs"), {
    product,
  });
});

router.get("/home", (request, response) => {
  response.status(200).send("home");
});

router.get("/about", (request, response) => {
  response.status(200).send("about");
});

router.get("/contact", (request, response) => {
  response.status(200).send("contact");
});

module.exports = router;
