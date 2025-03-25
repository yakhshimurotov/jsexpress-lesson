import {Router} from "express";
const router = Router();

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/sign-up", (req, res) => {
	res.render("sign-up");
});

export default router;