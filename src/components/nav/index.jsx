import React from "react";

function Nav() {
  let githubURL = "https://github.com/tecnobert/pinsharest";
  function goToGithub() {
    return (window.location.href = githubURL);
  }

  return (
    <div>
      <h2 className="title-nav">
        <span className="url-nav" onClick={goToGithub}>
          {"PinSharest"}
        </span>
      </h2>
    </div>
  );
}

export default Nav;
