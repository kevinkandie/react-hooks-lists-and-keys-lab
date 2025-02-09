import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksElement = links.map(( strings, index) => {
    return <div key={index}>{strings}</div>;
  });

  return <nav>{/* display an <a> tag for each link here */}

<a href="#home">home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
  
  
  
  
  </nav>;
}

export default NavBar;
