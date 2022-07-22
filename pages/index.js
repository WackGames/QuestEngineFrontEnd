import React from "react";
import LogInModal from "../components/LogInModal";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="pageContainer">
      <LogInModal />
      <footer>footer will go here</footer>
    </div>
  );
}

export default LandingPage;
