const { Router } = require("express");
const router = Router();
const personController = require("../person_controller");

router.get("/persons", personController.find);
router.get("/person/:id", personController.findOne);
router.post("/person", personController.save);
router.put("/person/:id", personController.save);
router.delete("/person/:id", personController.delete);

module.exports = router;