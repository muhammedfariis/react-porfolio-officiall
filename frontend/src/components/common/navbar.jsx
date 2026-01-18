import { useNavigate } from "react-router-dom";
import NavButton from "./button_navbar";
function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className=" items-center gap-5 backdrop-blur-3xl bg-linear-to-tl from-40% from-indigo-950   p-8 shadow-gray-900 shadow-2xl">
      <nav
        className="
          flex h-16 items-center justify-between
          rounded-2xl px-8
          backdrop-blur-xl
          bg-white/[0.006]
          border border-white/20
          shadow-2xl shadow-black/30
      "
      >
        <div className="flex justify-center items-center m-0 p-0">
          <img
            className="h-11 w-29"
            src="/public/images/mylogo.png"
            alt="mylogo"
          />{" "}
        </div>
        <div className="flex justify-center items-center gap-3">
          <NavButton text="HOME" onClick={() => Navigate("/")} />
          <NavButton text="ABOUT" onClick={() => Navigate("/about")} />
          <NavButton text="PROJECT" onClick={() => Navigate("/project")} />
          <NavButton text="CONTACT" onClick={() => Navigate("/contact")} />
        </div>

        <div className="flex justify-center items-center rounded-full h-10 w-11 bg-amber-50 hover:-scale-y-100">
          <img className="" src="/public/images/toggleforlight.svg" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
