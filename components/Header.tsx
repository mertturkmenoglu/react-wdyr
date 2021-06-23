import { useState, useEffect } from "react";

const Header = () => {
  const [text, setText] = useState("Default Text");

  useEffect(() => {
    setTimeout(() => {
      setText("John Doe");
    }, 5000);
  }, [setText]);

  return (
    <header>
      <h1>{text}</h1>
      <button onClick={() => setText("John Doe")}>Change Text</button>
    </header>
  );
};

Header.whyDidYouRender = true;

export default Header;
