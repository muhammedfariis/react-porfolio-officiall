import { useState } from "react";
import NavButton from "../components/common/button_navbar";

function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col align-text-top">
          <h3>MUHAMMED FARIS</h3>
          <h1>FULL-STACK DEVELOPER</h1>
          <p>
            Hi, I'm a Full Stack Developer who builds fast, scalable, and
            user-focused web applications. I specialize in crafting clean
            frontends and robust backends using modern JavaScript technologies.
            From idea to deployment, I turn concepts into reliable digital
            products.
          </p>
        </div>
        <div className="bg-black h-50 w-40">


        </div>
      </div>
    </>
  );
}

export default Home