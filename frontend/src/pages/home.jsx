import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-3">
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
            <div className="gap-1 flex items-center text-gray-500">
              <img src="/public/images/Ellipse 2 (1).png" alt="" />
              <p>Available Now</p>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-950 h-52 w-60"
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
