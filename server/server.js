const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const app = express();
var cors = require("cors");
const path = require("path");

//Connect Database
connectDB();
//Init Middleware
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("API Running");
});

var corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200, // some some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(cookieParser());
//Define route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/users/admin", require("./routes/api/admin/users"));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/auth/admin", require("./routes/api/admin/auth"));

app.use("/api/", require("./routes/api/category"));
app.use("/api/", require("./routes/api/product"));
app.use("/api/", require("./routes/api/cart"));

app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ports ${PORT} `);
});
