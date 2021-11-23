const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (!authHeader) return res.status(403).json("Token is not valid!");
    // const token = authHeader.split(" ")[1];
    // console.log(token)
    const user = jwt.verify(authHeader, process.env.JWT_SECRET)
    
    req.user = user;
    next();
  } catch(err) {
    return res.status(400).json("You are not authenticated!");
  }
}
// not prioritized --- verify token in jwt
// const verifyTokenAndAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not alowed to do that!");
//     }
//   });
// };

module.exports = verifyToken;