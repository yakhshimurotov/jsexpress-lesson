import { Router } from "express";
import User from "../models/User";
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
    try {
        const userDate = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        };
        console.log(userDate);

        const user = await User.create(userDate);
        console.log(user);

        res.redirect("/");
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        res.status(500).send("Serverda xatolik yuz berdi");
    }
});

export default router;