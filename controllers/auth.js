exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req.get("Cookie").split(";")[0].trim().split("=")[1] === "true";
  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");
  req.isLoggedIn = true;
  res.redirect("/");
};