"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { getHeadingStyles } from "@/components/commonUi/utils";
import { cn } from "@/lib/utils";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <form
        className="w-full max-w-screen-sm p-10 rounded-md border border-dim -mt-20"
        onSubmit={(e) => {
          e.preventDefault();
          signIn("credentials", { ...data, callbackUrl: "/az-admin" });
        }}
      >
        <h2 className={cn(getHeadingStyles("h2"), "text-center mb-8")}>
          Login as Admin
        </h2>
        <input
          placeholder="Email"
          type="email"
          className="p-3 outline-none border border-dim rounded-sm w-full bg-dim mb-5"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="text"
          className="p-3 outline-none border border-dim rounded-sm w-full bg-dim mb-5"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          type="submit"
          className="px-4 py-3 rounded-md transition-all bg-primary-light hover:bg-primary text-typo w-full mb-3 cursor-pointer"
          value="Login"
        />
      </form>
    </div>
  );
}
