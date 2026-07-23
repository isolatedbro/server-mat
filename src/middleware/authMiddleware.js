import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (!authHeader) {
      console.log("Auth Header Not Found")
      return res.status(401).json({ error: ["Authentication Failed !!!"] });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Authentication Failed in MiddleWare")
    return res.status(401).json({ error: ["Authencation Failed"] });
  }
};
export default authMiddleware;
