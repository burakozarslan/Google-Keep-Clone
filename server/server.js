const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var hpp = require("hpp");
var fileupload = require("express-fileupload");
var { auth } = require("./middleware/auth");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const labelRouter = require("./routes/label");
const noteRouter = require("./routes/note");
const imageRouter = require("./routes/image");
const userRouter = require("./routes/user");

connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// Serve images
// const imagesDir = path.join(__dirname, "media");
app.use(express.static("media"));

app.use(bodyParser.json());
app.use(fileupload());
app.use(hpp());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(cors());

app.use("/labels", auth, labelRouter);
app.use("/notes", auth, noteRouter);
app.use("/image", auth, imageRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.json({ data: "success" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
  console.log("REJECTION");
});
