import { Router } from "express";
import User from "../models/user.js";
const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    isLogin: true,
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up", {
    isSignup: true,
  });
});

router.post("/sign-up", async (req, res) => {
  const userDate = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    email: req.body.email,
    password: req.body.password,
  }
  console.log(userDate);
  const user = await User.create(userDate);
  console.log(user);
  res.redirect("/");
});

export default router;
