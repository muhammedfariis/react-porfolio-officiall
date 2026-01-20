import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const Box = () => {
    return (
      <div
        className="border-2 bg-transparent backdrop-blur-3xl h-10 w-36 flex items-center justify-center hover:animate-pulse hover:text-blue-950 rounded-2xl
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
    <div className="min-h-screen overflow-hidden relative w-full flex justify-center items-center ">
      <video className="absolute h-full w-full  object-cover" playsInline autoPlay loop muted>
        <source src="/public/videos/secondbg.mp4" />
      </video>
      <div className="flex justify-center items-center gap-5  backdrop-blur-xl bg-white/5 border border-white/5 rounded-2xl p-8 shadow-gray-900 shadow-2xl">
        <div className=" flex flex-col justify-center  items-center gap-5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          {count > 0 && <Box />}
          <div className="flex justify-center items-center gap-2">
            <button
              className={`h-10 w-10 rounded-full bg-blue-950 transition-transform ${
                !animate ? " bg-green-400 animate-pulse " : false
              } hover:bg-green-500 text-white hover:text-black `}
              onClick={() => {
                setCount(count + 1);
                handlinganimate();
              }}
            >
              +
            </button>
            <button
              className="h-10 w-10 rounded-full bg-blue-950  hover:bg-red-600 text-white hover:text-black"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col align-text-top h-50 w-96 gap-4  ">
          <div className="text-white">
            <h3 className="font-bold text-3xl">MUHAMMED FARIS</h3>
            <h1 className="font-light text-lg">FULL-STACK DEVELOPER</h1>
            <p className="max-w-lg text-sm  ">
              Hi, I'm a Full Stack Developer who builds fast, scalable, and
              user-focused web applications. I specialize in crafting clean
              frontends and robust backends using modern JavaScript
              technologies. From idea to deployment, I turn concepts into
              reliable digital products.
            </p>
          </div>

          <div className="flex  items-center gap-3 ">
            <button
              className="bg-blue-950 hover:bg-transparent hover:border-2  hover:border-white 
              h-8 w-32 text-sm hover:text-gray-300 text-white rounded-2xl"
              onClick={() => Navigate("/contact")}
            >
              GET IN TOUCH
            </button>
            <div className="gap-1 flex items-center text-green-400 animate-bounce">
              <img src="/public/images/Ellipse 2 (1).png" alt="" />
              <p>Available Now</p>
            </div>
          </div>
        </div>
        <div
          className="bg-transparent h-80 w-80  rounded-full"
          style={{
            clipPath:
              "polygon(0% 0% , 100% 0% , 100% 50% , 75% 100% , 25% 100% , 0% 50%)",
          }}
        >
          <img
            className="relative bottom-8 mask-b-from-0.5 brightness-110"
            src="/public/images/faris.png"
            alt=""
          />
        </div>
      </div>
     
    </div>
  );
}

export default Home;
