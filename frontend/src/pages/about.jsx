import { useNavigate } from "react-router-dom";

function About() {
  const Navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-20">
          <div className="h-96 w-96 bg-black"></div>
          <div className="">
            <div className="flex flex-col gap-2">
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
            <div className="imageslogo">
                <img src="/frontend/public/images/react.png" alt="" />
                <img src="/frontend/public/images/js.png" alt="" />
                <img src="/frontend/public/images/tailwind.png" alt="" />
                <img src="/frontend/public/images/html.png" alt="" />
                <img src="/frontend/public/images/css.png" alt="" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
