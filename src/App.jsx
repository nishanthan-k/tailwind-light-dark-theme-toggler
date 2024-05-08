import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("Light Mode");

  const themeHandler = () => {
    const htmlElement = document.querySelector("html");
    const themeAttr = htmlElement.getAttribute("theme");
    const newTheme = themeAttr === "dark" ? "light" : "dark";
    setTheme(newTheme === "light" ? "Dark Mode" : "Light Mode");
    htmlElement.setAttribute("theme", newTheme);
  };

  return (
    <div className="bg-bgColor h-dvh w-screen flex justify-between p-4">
      <h1 className="text-textColor">Hello</h1>

      <button onClick={() => themeHandler()} className="bg-buttonColor rounded-md h-10 p-2">
        {theme}
      </button>
    </div>
  );
}

export default App;
