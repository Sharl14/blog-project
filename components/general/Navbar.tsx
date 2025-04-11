import React from "react";
import Link from "next/link";
import SignIn from "./sign-in";
import { SignOut } from "./signout-button";
import { auth } from "@/auth";
const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Next <span className="text-blue-600">Blog</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div>{session ? <SignOut /> : <SignIn />}</div>
    </nav>
  );
};

export default Navbar;
