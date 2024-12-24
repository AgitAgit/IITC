const express = require("express");
const { json } = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// const postsRouter = require("./routes/postsRoute.js");
const businessRouter = require("./routes/businessRoute.js");
const usersRouter = require("./routes/usersRoute.js");
const authRouter = require("./routes/authRoute.js");

dotenv.config();

const uri = process.env.URI;

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to database. Checking documents...");
    })
    .catch((error) => {
        console.error(
            "Error connecting to the database or running operations:",
            error
        );
    });

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(json());

// app.use("/api/posts", postsRouter);
app.use("/business", businessRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is up3000",
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});