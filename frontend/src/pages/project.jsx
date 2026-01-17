import { useState } from "react";
import NavButton from "../components/common/button_navbar";
import { useNavigate } from "react-router-dom";
const Project = () => {
  const [text, setTexts] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 min-h-screen p-5">
        <h1 className="font-bold text-4xl">PROJECTS</h1>
        <div>
          <button
            className="h-15 w-60 text-lg font-bold bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105"
            onClick={() => setTexts(true)}
          >
            Project-Details
          </button>
        </div>

        {text && (
          <div className="h-40 w-150 bg-linear-to-br from-blue-950 to-blue-500  rounded-2xl flex flex-col justify-center items-center gap-3 text-center ">
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
              className="h-10 w-20  font-bold bg-linear-to-bl from-red-600 to-red-950 text-white  rounded-2xl transition duration-300 ease-in-out hover:scale-105"
              onClick={() => setTexts(false)}
            >
              Close❌
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center   ">
          {/* img 1 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out ">
            <img
              className="rounded-t-2xl"
              src="/public/images/project1.png"
              alt=""
            />
            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">BOOK-MANAGER</h1>
              <p>
                A web application for organizing and managing books, allowing
                users to add, update, delete, and track reading progress. It
                focuses on clean data handling, intuitive UI, and efficient
                content management.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/node-js.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/Express.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/mongodb.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>

          {/* img 2 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out ">
            <img
              className="rounded-t-2xl"
              src="/public/images/project2.png"
              alt=""
            />
            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">Daily-Journals-App</h1>
              <p>
                A digital journaling platform that enables users to write, save,
                and manage daily entries. The project emphasizes simplicity,
                privacy, and a smooth writing experience.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/node-js.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/Express.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/mongodb.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>

          {/* img 3 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out ">
            <img
              className="rounded-t-2xl"
              src="/public/images/project3.png"
              alt=""
            />
            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">BulkWrite-App</h1>
              <p>
                A productivity tool designed to handle large-scale text input
                and editing efficiently. It supports fast writing workflows,
                bulk content management, and performance-optimized text
                processing.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/node-js.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/Express.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/mongodb.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>

          {/* img 4 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out ">
            <img
              className="rounded-t-2xl"
              src="/public/images/project4.png"
              alt=""
            />
            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">3D Particle-Gesture</h1>
              <p>
                An interactive visual project featuring 3D particle animations
                that respond to user gestures or input. It demonstrates creative
                coding, real-time rendering, and advanced UI interaction
                concepts.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>

          {/* img 5 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out ">
            <img
              className="rounded-t-2xl"
              src="/public/images/project5.png"
              alt=""
            />
            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">Portfolio</h1>
              <p>
                A personal portfolio website showcasing projects, skills, and
                experience. It highlights clean design, responsive layouts, and
                a focus on performance and usability.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>

          {/* img 6 */}

          <div className="flex flex-col text-center items-center justify-center hover:scale-95 transition ease-in-out  ">
            <div className="grid grid-cols-2 grid-rows-2 justify-center items-center">
              <img src="/public/images/project6-1.png" alt="" />
              <img src="/public/images/project6-2.png" alt="" />
              <img src="/public/images/project6-3.png" alt="" />
              <img src="/public/images/project6-4.png" alt="" />
            </div>

            <div className="flex flex-col gap-3 items-center rounded-b-2xl bg-blue-950 text-white ">
              <h1 className="font-bold text-2xl">Chat-App (socket.io)</h1>
              <p>
                A real-time chat application built using WebSockets and
                Socket.IO, enabling instant messaging between users. It focuses
                on low-latency communication, user presence, and real-time data
                synchronization.
              </p>
              <h1 className="font-bold text-lg">Technologies Used</h1>

              <div className=" flex justify-center items-center gap-2.5">
                <img
                  className="h-10 w-10"
                  src="/public/images/node-js.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/Express.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/mongodb.svg"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/html.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/css.png"
                  alt=""
                />
                <img
                  className="h-10 w-10"
                  src="/public/images/react.png"
                  alt=""
                />
                <img className="h-10 w-10" src="/public/images/js.png" alt="" />
              </div>
              <button className="w-25  h-10 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
                Visit Site
              </button>
              <div className="h-2"></div>
            </div>
          </div>
        </div>
          <button className="h-10 w-30 bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">All Projects</button>

      </div>
    </>
  );
};

export default Project;
