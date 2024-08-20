const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("./db");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const results = await db.queryAsync(
            "SELECT * FROM accounts WHERE email = ?",
            [email]
          );
          if (results.length === 0)
            return done(null, false, { message: "No user found" });

          const user = results[0];
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch)
            return done(null, false, { message: "Incorrect password" });

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const results = await db.queryAsync(
        "SELECT * FROM accounts WHERE id = ?",
        [id]
      );
      if (results.length === 0) return done(new Error("User not found"));
      done(null, results[0]);
    } catch (err) {
      done(err);
    }
  });
};
