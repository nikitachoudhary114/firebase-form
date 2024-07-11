const express = require('express');
const app = express();
const path = require("path");
const User = require("./config.js");
const session = require("express-session");
const flash = require("connect-flash")
const exp = require('constants');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(session({
    secret: "secretCode",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    next();
})

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.post("/", async (req, res) => {
    let { email, name, message } = req.body;
    let a = await User.add({ email, name, message });
    req.flash("success", "Form submitted")
    res.redirect("/");
});


app.listen(3000, () => {
    console.log(`listening to port`,3000 )
})