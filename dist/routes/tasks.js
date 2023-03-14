"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();
router.get("/refi/", _tasks.getRefis);
router.get("/refi/count", _tasks.getRefiCount);
router.get("/refi/:id", _tasks.getRefi);
router.post("/refi/", _tasks.createRefi);
router["delete"]("/refi/:id", _tasks.deleteRefi);
router.put("/refi/:id", _tasks.updateRefi);
var _default = router;
exports["default"] = _default;