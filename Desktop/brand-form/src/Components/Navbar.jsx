import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-center gap-6">
      <Link
        to="/"
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
      >
        Form
      </Link>

      <Link
        to="/brands"
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
      >
        Brands
      </Link>
    </nav>
  );
}

export default Navbar;
