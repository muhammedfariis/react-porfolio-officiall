import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen overflow-hidden relative w-full flex justify-center items-center px-4">
      
      {/* Background */}
      <video
        className="absolute h-full w-full -z-10 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/public/videos/secondbg.mp4" />
      </video>

      <div className="min-h-screen flex justify-center items-center w-full max-w-6xl">
        
        {/* MAIN CONTAINER */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 w-full">

          {/* ================= IMAGE SECTION ================= */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 flex justify-center items-center">
            <div className="bg-black absolute h-full w-1/2 rounded-3xl left-0"></div>

            <img
              className="relative left-4 rounded-3xl max-w-full h-auto"
              src="/public/images/faris.jpeg"
              alt=""
            />
          </div>

          {/* ================= TEXT SECTION ================= */}
          <div className="flex flex-col gap-4 text-center lg:text-left max-w-xl">

            <div className="flex flex-col gap-2 text-white">
              <h1 className="text-2xl sm:text-3xl font-bold">ABOUT-ME</h1>

              <p className="text-sm leading-relaxed px-2 sm:px-0">
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

            {/* ================= SKILLS ICONS ================= */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">

              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/react.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/js.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/tailwind.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/html.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/css.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/Express.png" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/node-js.svg" alt="" />
              <img className="h-10 w-10 transition duration-500 ease-in-out hover:scale-120" src="/public/images/mongodb.svg" alt="" />

            </div>

            {/* ================= BUTTON ================= */}
            <div className="flex justify-center lg:justify-start">
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
    </div>
  );
}

export default About;

