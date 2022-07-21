import React from "react";
import Navbar from "../components/Navbar";
import LogInModal from "../components/LogInModal";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="pageContainer">
      <Navbar />
      <LogInModal />
      <footer>footer will go here</footer>
    </div>
  );
}

export default LandingPage;
