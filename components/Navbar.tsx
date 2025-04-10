import React from "react";
import Link from "next/link";
import SignIn from "./sign-in";
const navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-semibold">
          Next <span className="text-blue-600">Blog</span>
        </h1>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4"></div>
      <div>
        <SignIn />
      </div>
    </nav>
  );
};

export default navbar;
