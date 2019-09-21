const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

// connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use("/api/books", require("./routes/books"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
