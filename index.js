const path = require("path");
const express = require("express");
const cors = require("cors");
const feedbackRouter = require("./routes/feedback.routes");

const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", feedbackRouter);

console.log("Database_URL", process.env.DATABASE_URL);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, (error) =>
    error ? console.log(error) : console.log(`Server has started on port:${PORT}`),
);
