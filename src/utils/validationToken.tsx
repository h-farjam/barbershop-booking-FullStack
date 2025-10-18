import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export interface TokenPayload {
  _id: string;
  phone: string;
  Fname: string;
  Lname: string;
}

export async function ValidateToken(): Promise<TokenPayload | null> {
  try {
    // ✅ چون تابع async است، باید از await استفاده کنی
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    if (!payload || typeof payload !== "object" || !payload._id) return null;

    return payload;
  } catch {
    return null;
  }
}
