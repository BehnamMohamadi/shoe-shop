const express = require("express");
const { join } = require("node:path");
const AppError = require("./utils/app-error");
const viewRouter = require("./routes/view-routes");
const apiRouter = require("./routes/api-routes");
const app = express();
const port = 8000;
const host = "127.0.0.1";

//parser
app.use(express.json());

//view engine setup
app.set("view engine", "ejs");
//ejs
app.set("views", join(__dirname, "./views"));

//serve static files
app.use(express.static(join(__dirname, "./public")));

app.use("/api", apiRouter);
app.use("/", viewRouter);

app.all("*", (request, response, next) => {
  const { method, originalUrl: pathname } = request;
  next(AppError(404, `${method} ${pathname} not-found`));
});

app.use((err, request, response, next) => {
  const { statusCode = 500, status = "error", message = "internal server error" } = err;

  console.log(err);
  console.log(err.stack);

  response.status(statusCode).json(status, message);
});

app.listen(port, host, () => {
  console.log(`you are listening on ${host}: ${port}`);
});
