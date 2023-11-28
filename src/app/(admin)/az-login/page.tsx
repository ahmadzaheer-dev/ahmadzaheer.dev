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
          className="p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5 autofill:bg-transparent"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="text"
          className="p-2.5 border border-dim focus:border-white outline-none bg-transparent w-full rounded-md mb-5 autofill:bg-transparent"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          type="submit"
          className="p-2.5 rounded-md transition-all bg-white hover:bg-primary-green text-bgColor font-semibold w-full mb-3 cursor-pointer"
          value="Login"
        />
      </form>
    </div>
  );
}
