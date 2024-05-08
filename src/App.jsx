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
    <div className="bg-bgColor h-dvh w-screen flex flex-col p-4 gap-4">
      <div className="self-end">
        <button onClick={() => themeHandler()} className="bg-buttonColor rounded-md h-10 p-2">
          {theme}
        </button>
      </div>

      <p className="text-textColor">Cupidatat exercitation ut consectetur ut velit quis incididunt adipisicing fugiat consectetur non magna ad. In commodo dolore minim aliqua. Quis laboris amet ullamco enim culpa velit elit laborum dolor sint dolore nulla do fugiat. Ea voluptate officia magna aliqua eiusmod. Commodo quis minim aliquip ullamco eiusmod. Eu nostrud ad laborum voluptate commodo aute est pariatur duis.</p>

      <p className="text-textColor">Veniam ut consectetur quis duis commodo nulla. Irure veniam anim et consectetur esse sunt eiusmod elit Lorem fugiat velit sit. In consequat ex cupidatat ut voluptate. Enim nostrud non sint duis laborum. Et consequat nisi aliqua eiusmod veniam. Veniam id sunt ullamco eiusmod tempor occaecat consequat veniam amet. Pariatur duis elit incididunt qui laborum nulla incididunt voluptate est.</p>

      <p className="text-textColor">Voluptate culpa quis quis reprehenderit esse ad et nostrud laboris ex nulla elit do. Ex duis sunt est labore labore occaecat sint. Laboris excepteur commodo irure sint ipsum magna sunt officia qui labore eiusmod. Sunt labore dolor consectetur aliquip duis ea commodo aliquip ullamco aute consectetur sit. Amet eu commodo Lorem et nostrud ad aute elit veniam adipisicing nostrud do. Exercitation commodo in ullamco officia duis ullamco culpa minim et id ipsum.</p>

      <p className="text-textColor">Aute occaecat mollit voluptate tempor ea aliqua sint ipsum consequat magna duis irure. Voluptate esse consectetur fugiat occaecat velit irure labore id pariatur nostrud exercitation veniam excepteur pariatur. Esse in excepteur et non magna commodo Lorem non aliqua cupidatat magna officia Lorem ex.</p>
    </div>
  );
}

export default App;
