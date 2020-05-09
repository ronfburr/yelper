import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id='nav'>
      <div id='nav-inner'>
        <Link to="/">Search</Link>
        <Link to="/review">Review</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
    </div>
  );
}
