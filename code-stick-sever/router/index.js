const Router = require("koa-router");
const router = new Router();
const addRouter = require("./add");
const getRouter = require("./get");

router.use("/add", addRouter.routes(), addRouter.allowedMethods());
router.use("/get", getRouter.routes(), getRouter.allowedMethods());

module.exports = router;
