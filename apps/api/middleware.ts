import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  // Typical header: "Bearer eyJhbGciOiJIUzI1NiIsInR..."
  // const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

  try {
    const decoded = jwt.verify(authHeader, JWT_PUBLIC_KEY) as jwt.JwtPayload;
    console.log("Decoded JWT:", decoded);

    if (!decoded?.sub) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    req.userId = decoded.sub as string;
    next(); // ✅ continue to the next middleware/route
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
