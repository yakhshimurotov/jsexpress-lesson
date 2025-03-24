import express from "express";
import { create } from "express-handlebars";

const app = express();

const hbs = create({
	defaultLayout: "main",
	extname: "hbs",
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


app.get("/", (req, res) => {
	res.render("index");
});

app.get("/about" , (req, res) => {
	res.render("about");
});

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server is running... ${PORT}`));
