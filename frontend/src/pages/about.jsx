import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen overflow-hidden relative w-full flex justify-center items-center">
      <video className=" absolute h-full w-full -z-10 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
      <source src="/public/videos/secondbg.mp4" />

      </video>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="flex justify-center items-center gap-20">
          <div className="h-96 w-96 ">
            <div className="bg-black h-96 w-50 rounded-3xl "></div>
            <img className="relative left-4 bottom-92 rounded-3xl" src="/public/images/faris.jpeg" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-white">
              <h1 className="text-3xl font-bold">ABOUT-ME</h1>
              <p className="max-w-lg text-sm">
                I am a full-stack web developer working with Node.js, Express,
                MongoDB, and React to build modern, scalable web applications. I
                focus on creating efficient backends and dynamic, responsive
                user interfaces using HTML and CSS. I specialize in developing
                end-to-end web solutions using React for interactive front-end
                experiences and Node.js with Express for robust backend
                services, with MongoDB handling data efficiently. I build modern
                MERN-stack applications where React powers the frontend and
                Node.js, Express, and MongoDB manage the backend. My work
                focuses on clean code, performance, and user-friendly design. As
                a full-stack JavaScript developer, I use React to create fast,
                responsive interfaces and Node.js with Express to deliver
                reliable APIs, combining everything into seamless web
                applications.
              </p>
            </div>
            <div className="flex space-x-7">
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/react.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/js.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/tailwind.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/html.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/css.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/Express.png"
                alt=""
              />
              <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/node-js.svg"
                alt=""
              />
                <img
                className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120"
                src="/public/images/mongodb.svg"
                alt=""
              />
            </div>
            <Link
              to="/public/pdf/MuhammedFaris_resume.pdf"
              target="_blank"
              download
            >
              <button className="h-10 w-40 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Download-Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
