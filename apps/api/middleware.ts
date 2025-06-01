// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

// // 1. Extend Express Request type to support `userId`
// declare global {
//   namespace Express {
//     interface Request {
//       userId?: string;
//     }
//   }
// }

// export function authMiddleware(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers["authorization"];

//   if (!authHeader) {
//     res.status(401).json({ error: "Unauthorized" });
//     return;
//   }

//   // Typical header: "Bearer eyJhbGciOiJIUzI1NiIsInR..."
//   const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

//   try {
//     const decoded = jwt.verify(token, JWT_PUBLIC_KEY) as jwt.JwtPayload;

//     if (!decoded?.sub) {
//       res.status(401).json({ error: "Unauthorized" });
//       return;
//     }

//     req.userId = decoded.sub as string;
//     next(); // ✅ continue to the next middleware/route
//   } catch (err) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// }

import type { NextFunction, Request, Response } from "express";
export function authMiddleware (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    req.userId = "5";
    next()
}