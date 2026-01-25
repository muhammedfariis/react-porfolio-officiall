
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavButton from "./button_navbar";

function Navbar() {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (path) => {
    Navigate(path);
    setOpen(false);
  };

  return (
    <div className="
      w-full
      backdrop-blur-3xl bg-linear-to-tl from-40% from-indigo-950
      p-4 sm:p-6 md:p-8
      shadow-gray-900 shadow-2xl
      relative
      z-50
    ">
      <nav
        className="
          flex items-center justify-between
          h-14 sm:h-16
          rounded-2xl px-4 sm:px-6 md:px-8
          backdrop-blur-xl
          bg-white/[0.006]
          border border-white/20
          shadow-2xl shadow-black/30
        "
      >
        <div className="flex justify-center items-center">
          <img
            className="h-14 w-24 sm:h-20 sm:w-32 md:h-25 md:w-35 animate-pulse hover:scale-90"
            src="/public/images/logo.png"
            alt="mylogo"
          />
        </div>

        <div className="hidden md:flex justify-center items-center gap-3">
          <NavButton text="HOME" onClick={() => go("/")} />
          <NavButton text="ABOUT" onClick={() => go("/about")} />
          <NavButton text="PROJECT" onClick={() => go("/project")} />
          <NavButton text="CONTACT" onClick={() => go("/contact")} />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center rounded-full h-9 w-9 sm:h-10 sm:w-11 bg-amber-50">
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>

    {open && (
  <div className="
    fixed inset-0
    backdrop-blur-3xl
    flex flex-col
    h-fit
    items-center justify-center
    gap-6
    z-50
    p-5
    bg-blue-950
  
  ">
    <button
      onClick={() => setOpen(false)}
      className="absolute top-6 right-6 text-white text-3xl "
    >
      ✖
    </button>

    <NavButton text="HOME" onClick={() => go("/")} />
    <NavButton text="ABOUT" onClick={() => go("/about")} />
    <NavButton text="PROJECT" onClick={() => go("/project")} />
    <NavButton text="CONTACT" onClick={() => go("/contact")} />
  </div>
)}
    </div>
  );
}

export default Navbar;

