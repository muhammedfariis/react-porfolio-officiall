import { useState } from "react";
import NavButton from "../components/common/button_navbar";
import { useNavigate } from "react-router-dom";
const Project = () => {
  const [text, setTexts] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 gap-5">
        <h1>PROJECTS</h1>
        <div>
            
           <button className="h-15 w-60 rounded-full bg-green-400" onClick={()=>setTexts(true)}>Project-Details</button>
          
        </div>

      {text && (
        <div className="h-40 w-150 bg-linear-to-br from-violet-600 to-blue-500  rounded-2xl flex flex-col justify-center items-center gap-3 text-center ">
          <p className=" min-w-lg text-sm text-amber-50 ">
            This page showcases a collection of my full-stack development
            projects, demonstrating my ability to design, build, and maintain
            complete web applications. Each project reflects practical
            problem-solving skills, clean architecture, and attention to
            performance, security, and user experience. Together, these projects
            highlight my experience working across different domains and my
            commitment to delivering reliable, scalable, and well-structured
            solutions.
          </p>
           <button className="h-10 w-20 rounded-full bg-red-600" onClick={()=>setTexts(false)}>Close❌</button>
        </div>
      )}

      </div>

    </>
  );
};

export default Project;
