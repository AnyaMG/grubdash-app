const router = require("express").Router();
const controller = require("./dishes.controller");

// TODO: Implement the /dishes routes needed to make the tests pass
//In the src/dishes/dishes.router.js file, add two routes: /dishes, and /dishes/:dishId
//and attach the handlers (create, read, update, and list) exported from src/dishes/dishes.controller.js.

// List route
router.get('/', controller.list);

// Create route
router.post('/', controller.create);

router
  .route("/:dishId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
