// import express from "express";
// import { create } from "express-handlebars";

// const app = express();

// const hbs = create({
// 	defaultLayout: "main",
// 	extname: "hbs",
// });

// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');
// app.set('views', './views');


// app.get("/", (req, res) => {
// 	res.render("index");
// });

// app.get("/about" , (req, res) => {
// 	res.render("about");
// });

// const PORT = process.env.PORT || 4000
// app.listen(PORT, () => console.log(`Server is running... ${PORT}`));

import express from "express";
import {create} from "express-handlebars";
import AouthRoutse from "./routse/auth.js";
import ProductsRoutse from "./routse/products.js";
const app = express();

const hbs = create({
	defaultLayout: "main",
	extname: "hbs",
 });

app.engine("hbs", hbs.engine);
app.set("view engine", 'hbs');
app.set("views", "./views");

app.use(AouthRoutse);
app.use(ProductsRoutse);

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`);
});

// 3 - O'zim yozgan qo'd express JS mustahkamlash uchun