const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require("./db");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./passportConfig")(passport);
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET || "secret"));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const [existingEmail, existingUsername] = await Promise.all([
      db.queryAsync("SELECT * FROM accounts WHERE email = ?", [email]),
      db.queryAsync("SELECT * FROM accounts WHERE username = ?", [username]),
    ]);

    if (existingEmail.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (existingUsername.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.queryAsync(
      "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login endpoint
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Authentication error", err });
    }
    if (!user) {
      return res.status(400).json({ message: "No user found" });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login error", err });
      }
      return res
        .status(200)
        .json({ message: "Successfully Authenticated", user });
    });
  })(req, res, next);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
