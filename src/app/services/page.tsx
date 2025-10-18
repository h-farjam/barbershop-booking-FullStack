"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TokenPayload } from "@/utils/validationToken";

export default function Services() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<TokenPayload | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();

        if (data.loggedIn) {
          setUser(data.user);
        } else {
          router.push("/login"); // اگر لاگین نبود، بفرست به صفحه لاگین
        }
      } catch (err) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  if (loading) return <p>در حال بررسی وضعیت کاربر...</p>;

  return (
    <div>
      <h1>صفحه خدمات</h1>
      <p>
        کاربر: {user?.Fname} {user?.Lname}
      </p>
    </div>
  );
}
