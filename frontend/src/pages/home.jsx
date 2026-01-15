import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const Box = () => {
    return (
      <div
        className="border-2 bg-transparent backdrop-blur-3xl h-10 w-36 flex items-center justify-center hover:animate-pulse hover:text-red-500
      transition-all duration-300 ease-in"
      >
        <p>Count : {count}</p>
      </div>
    );
  };

  const handlinganimate = () => {
    setAnimate(!animate);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-3">
        <div className=" flex flex-col justify-center items-center gap-5">
          {count > 0 && <Box />}
          <div className="flex justify-center items-center gap-2">
            <button
              className={`h-10 w-10 rounded-full bg-blue-950 transition-transform ${
                !animate ? "animate-pulse" : ""
              } hover:bg-green-500 text-white hover:text-black `}
              onClick={() => {
                setCount(count + 1);
                handlinganimate();
              }}
            >
              +
            </button>
            <button
              className="h-10 w-10 rounded-full bg-blue-950 hover:animate-pulse hover:bg-green-500 text-white hover:text-black"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col align-text-top h-50 w-96 gap-4 ">
          <div>
            <h3>MUHAMMED FARIS</h3>
            <h1>FULL-STACK DEVELOPER</h1>
            <p className="max-w-lg text-sm ">
              Hi, I'm a Full Stack Developer who builds fast, scalable, and
              user-focused web applications. I specialize in crafting clean
              frontends and robust backends using modern JavaScript
              technologies. From idea to deployment, I turn concepts into
              reliable digital products.
            </p>
          </div>

          <div className="flex  items-center gap-3 ">
            <button
              className="bg-blue-950 hover:bg-transparent hover:border-2  hover:border-blue-950 
              h-8 w-32 text-sm hover:text-blue-950 text-white rounded-2xl"
              onClick={() => Navigate("/contact")}
            >
              GET IN TOUCH
            </button>
            <div className="gap-1 flex items-center text-gray-500 animate-bounce">
              <img src="/public/images/Ellipse 2 (1).png" alt="" />
              <p>Available Now</p>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-950 h-60 w-60  rounded-full"
          style={{
            clipPath:
              "polygon(0% 0% , 100% 0% , 100% 50% , 75% 100% , 25% 100% , 0% 50%)",
          }}
        >
          {" "}
        </div>
      </div>
    </>
  );
}

export default Home;
