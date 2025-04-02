import {Router} from "express";
const router = Router();

router.get("/login", (req, res) => {
	res.render("login",{
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

router.post("/sign-up", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

export default router;