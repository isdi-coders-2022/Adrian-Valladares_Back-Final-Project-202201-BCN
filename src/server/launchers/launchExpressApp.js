const debug = require("debug")("SCHEDBORD:express-launcher");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const generalError = require("../middleware/generalError");
const notFound = require("../middleware/notFound");
const userProjectsRouter = require("../routers/userProjectsRouter");
const pingRouter = require("../routers/pingRouter");
const projectRouter = require("../routers/projectRouter");
const deleteTaskRouter = require("../routers/deleteTaskRouter");
const createTaskRouter = require("../routers/createTaskRouter");
const taskRouter = require("../routers/taskRouter");
const authenticationRouter = require("../routers/authenticationRouter");

const launchExpressApp = () => {
  debug("launching express app...");
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));

  app.use("/ping", pingRouter);
  app.use("/userProjects", userProjectsRouter);
  app.use("/project", projectRouter);
  app.use("/deleteTask", deleteTaskRouter);
  app.use("/createTask", createTaskRouter);
  app.use("/task", taskRouter);
  app.use("/authentication", authenticationRouter);

  app.use(notFound);
  app.use(generalError);

  return app;
};

module.exports = launchExpressApp;
