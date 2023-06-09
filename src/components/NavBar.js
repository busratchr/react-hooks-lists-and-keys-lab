import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map((link) => {
    const href = `#${link}`;
  
  return (
    <a href={href} key={link}>
      {link}
    </a>
  );

});
return <nav>{ renderLinks}</nav>;
}

export default NavBar;
