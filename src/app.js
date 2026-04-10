const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const requestRoutes = require("./routes/requestRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

app.use(authRoutes);
app.use(requestRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

