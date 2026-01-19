import { useState } from "react";
import NavButton from "../components/common/button_navbar";
import { useNavigate } from "react-router-dom";
const Project = () => {
  const [text, setTexts] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden  relative min-w-screen flex justify-center items-center ">
      <video
        className="absolute h-full w-full -z-10 object-cover"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/public/videos/secondbg.mp4" />
      </video>
      <div className="flex flex-col items-center justify-center gap-5 min-h-screen p-5">
        <h1 className="font-bold text-4xl text-white">PROJECTS</h1>
        <div>
          <button
            className="h-15 w-60 text-lg font-bold bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105"
            onClick={() => setTexts(true)}
          >
            Project-Details
          </button>
        </div>

        {text && (
          <div className="h-40 w-150 ackdrop-blur-xl bg-white/10 border border-white/20  p-8 shadow-2xl rounded-2xl flex flex-col justify-center items-center gap-3 text-center ">
            <p className=" min-w-lg text-sm text-amber-50 ">
              This page showcases a collection of my full-stack development
              projects, demonstrating my ability to design, build, and maintain
              complete web applications. Each project reflects practical
              problem-solving skills, clean architecture, and attention to
              performance, security, and user experience. Together, these
              projects highlight my experience working across different domains
              and my commitment to delivering reliable, scalable, and
              well-structured solutions.
            </p>
            <button
              className="h-15 w-20  font-bold bg-linear-to-bl from-red-600 to-red-950 text-white  rounded-2xl transition duration-300 ease-in-out hover:scale-105"
              onClick={() => setTexts(false)}
            >
              Close❌
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center items-stretch">
          {/* img 1 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project1.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">BOOK-MANAGER</h1>
              <p className="text-sm">
                A web application for organizing and managing books...
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/node-js.svg" />
                <img className="h-10 w-10" src="/public/images/Express.png" />
                <img className="h-10 w-10" src="/public/images/mongodb.svg" />
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>
              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project4.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">3D Particle-Gesture</h1>
              <p className="text-sm">
                An interactive visual project featuring 3D particles...
                
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/node-js.svg" />
                <img className="h-10 w-10" src="/public/images/Express.png" />
                <img className="h-10 w-10" src="/public/images/mongodb.svg" />
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>

              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project3.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">BulkWrite-App</h1>
              <p className="text-sm">
                A productivity tool designed to handle large-scale text...
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/node-js.svg" />
                <img className="h-10 w-10" src="/public/images/Express.png" />
                <img className="h-10 w-10" src="/public/images/mongodb.svg" />
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>

              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project2.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">Daily-Journals-App</h1>
              <p className="text-sm">
                A digital journaling platform that enables users...
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>

              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project5.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">Portfolio</h1>
              <p className="text-sm">
                A personal portfolio website showcasing projects...
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>

              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
            </div>
          </div>

          {/* PROJECT 6 */}
          <div className="flex flex-col h-full text-center hover:scale-95 transition ease-in-out">
            <div className="h-48 w-full grid grid-cols-2 grid-rows-2 overflow-hidden rounded-t-2xl">
              <img
                className="h-full w-full object-cover"
                src="/public/images/project6-1.png"
              />
              <img
                className="h-full w-full object-cover"
                src="/public/images/project6-2.png"
              />
              <img
                className="h-full w-full object-cover"
                src="/public/images/project6-3.png"
              />
              <img
                className="h-full w-full object-cover"
                src="/public/images/project6-4.png"
              />
            </div>

            <div className="flex flex-col grow gap-3 items-center justify-between rounded-b-2xl bg-blue-950 text-white p-4">
              <h1 className="font-bold text-2xl">Chat-App (socket.io)</h1>
              <p className="text-sm">
                A real-time chat application built using WebSockets...
              </p>

              <h1 className="font-bold text-lg">Technologies Used</h1>
              <div className="flex gap-2.5">
                <img className="h-10 w-10" src="/public/images/node-js.svg" />
                <img className="h-10 w-10" src="/public/images/Express.png" />
                <img className="h-10 w-10" src="/public/images/mongodb.svg" />
                <img className="h-10 w-10" src="/public/images/html.png" />
                <img className="h-10 w-10" src="/public/images/css.png" />
                <img className="h-10 w-10" src="/public/images/react.png" />
                <img className="h-10 w-10" src="/public/images/js.png" />
              </div>

              <a href="https://github.com/muhammedfariis">
                <button className="w-25 h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl hover:scale-105">
                  Visit Site
                </button>
              </a>
              <div className="h-2"></div>
            </div>
          </div>
        </div>
        <a href="https://github.com/muhammedfariis">
          <button className="h-10 w-30 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
            All Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
