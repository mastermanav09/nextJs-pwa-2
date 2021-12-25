import React from "react";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="h-14 bg-black text-white flex items-center py-0 px-scr-8 text-lg justify-between sticky">
      <div>
        <Link href="/">Revolution</Link>
      </div>

      <ul className=" group-first:text-red-600 mid-md-max:hidden">
        <li className="inline mx-3 text-sm">
          <Link href="/design">Design</Link>
        </li>
        <li className="inline mx-3 text-sm">
          <Link href="/development">Development</Link>
        </li>
        <li className="inline mx-3 text-sm">
          <Link href="/production">Production</Link>
        </li>
        <li className="inline mx-3 text-sm">
          <Link href="/photography">Photography</Link>
        </li>
        <li className="inline mx-3 text-sm">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
