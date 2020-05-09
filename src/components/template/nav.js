import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id='nav'>
      <div id='nav-inner'>
        <Link to="/">Results</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
    </div>
  );
}
