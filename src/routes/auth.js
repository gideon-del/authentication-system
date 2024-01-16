const { Router } = require("express");
const authRouter = Router();

authRouter.post("/register", (req, res) => {});
authRouter.get("/login", (req, res) => {});
authRouter.get("/logout", (req, res) => {});
authRouter.get("/activate", (req, res) => {});

module.exports = authRouter;
