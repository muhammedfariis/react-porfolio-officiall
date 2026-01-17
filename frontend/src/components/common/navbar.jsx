import { useNavigate } from "react-router-dom";
import NavButton from "./button_navbar";
function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="h-10 min-w-screen flex justify-between items-center p-5 mt-5">
          <div className="flex justify-center items-center m-0 p-0">
            <img className="h-11 w-29" src="/public/images/mylogo.png" alt="mylogo" />{" "}
          </div>
          <div className="flex justify-center items-center gap-3">
            <NavButton text="HOME" onClick={() => Navigate("/")} />
            <NavButton text="ABOUT" onClick={() => Navigate("/about")} />
            <NavButton text="PROJECT" onClick={() => Navigate("/project")} />
            <NavButton text="CONTACT" onClick={() => Navigate("/contact")} />
          </div>

          <div className="flex justify-center items-center w-29">
             <img src="/public/images/toggleforlight.svg" alt="" />
          </div>
      </nav>
    </>
  );
}

export default Navbar
