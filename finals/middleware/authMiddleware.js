import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization; //from the token

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; //split the "bearer" and the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //verify token using secret
    req.user = { id: decoded.id, role: decoded.role }; //attach user info to request object
    next(); //proceed to next middleware or route handler //run the next to this
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
