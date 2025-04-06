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

// -------------------------------------------------------------------

// import express from "express";
// import {create} from "express-handlebars";
// import AouthRoutse from "./routse/auth.js";
// import ProductsRoutse from "./routse/products.js";
// const app = express();

// const hbs = create({
// 	defaultLayout: "main",
// 	extname: "hbs",
//  });

// app.engine("hbs", hbs.engine);
// app.set("view engine", 'hbs');
// app.set("views", "./views");

// app.use(AouthRoutse);
// app.use(ProductsRoutse);

// const PORT = process.env.PORT || 4100
// app.listen(PORT, () => {
// 	console.log(`Server is running ${PORT}`);
// });

// 3 - O'zim yozgan qo'd express JS mustahkamlash uchun

// -------------------------------------------------------------------

// import express from "express";
// import {create} from "express-handlebars";
// import authsRouter from "./routse/auth.js";
// import productsRouter from "./routse/products.js";
// const app = express();

// const hbs = create({
// 	defaultLayout: "main",
// 	extname: "hbs",
// });

// app.engine("hbs", hbs.engine);
// app.set("view engine", "hbs");
// app.set("views", "./views");

// app.use(express.urlencoded({extended: true}));
// app.use(authsRouter);
// app.use(productsRouter);
// app.use(express.static("public"));


// const PORT = process.env.PORT || 1000
// app.listen(PORT, () => {
// 	console.log(`Server is running ${PORT}`);
// });


// 4 - O'zim yozgan qo'd express JS mustahkamlash uchun

import express from "express";
import {create} from "express-handlebars";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Routes
import aouthRouter from "./routse/auth.js";
import productRouter from "./routse/products.js";

dotenv.config();
const app = express();

const hbs = create({
	defaultLayout: "main",
	extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(aouthRouter);
app.use(productRouter);

const appStart = () => {
	try {
		mongoose.connect(process.env.MONGO_URL)
		.then(() => console.log("MongoDB muafaqiyatli bog'landi..."))
		.catch(() => console.log("Bog'lanishda xatolik yuz berdi..."))
		
		const PORT = process.env.PORT || 1000
		app.listen(PORT, () => {
			console.log(`Server is runnning ${PORT}`);
		});
	} catch(error) {
		console.log(error);
	}
}
appStart();
