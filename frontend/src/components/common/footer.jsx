import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="items-center gap-5 backdrop-blur-3xl bg-linear-to-bl from-40% from-indigo-950 to-blue-950 shadow-gray-900 m-0 p-0">
      
      <div className="flex flex-col md:flex-row items-center justify-between px-5 pt-3 gap-8">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            className="h-20 w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 animate-bounce hover:scale-90"
            src="/public/images/logo.png"
            alt=""
          />
          <h1 className="max-w-md text-sm md:text-base lg:text-lg text-white">
            Building tomorrow's web experiences today with creativity and
            technical excellence.
          </h1>
        </div>

        <div className="flex gap-2 flex-col justify-center items-center text-white">
          <h1 className="font-bold text-lg md:text-xl">Quick Links</h1>
          <div className="flex flex-col text-center text-white">
            <Link className="font-semibold text-base md:text-lg hover:scale-95 transition duration-300" to="/">Home</Link>
            <Link className="font-semibold text-base md:text-lg hover:scale-95 transition duration-300" to="/about">About</Link>
            <Link className="font-semibold text-base md:text-lg hover:scale-95 transition duration-300" to="/project">Project</Link>
            <Link className="font-semibold text-base md:text-lg hover:scale-95 transition duration-300" to="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold text-lg md:text-xl text-white">Connect</h1>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/jobs/muhammedfariis">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 md:w-8 md:h-8 rounded bg-gray-300 hover:scale-95 transition duration-300"
              >
                <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3zM9.98 8.98h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.3c0-1.26-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8V21h-4z" />
              </svg>
            </a>

            <a href="https://github.com/muhammedfariis">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 md:w-8 md:h-8 text-white hover:scale-95 transition duration-300"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.12-3.13 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.63.24 2.83.12 3.13.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 md:w-8 md:h-8 text-white rounded hover:scale-95 transition duration-300"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.507 5.507 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.504 3.504 0 0112 16.5zM18 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-3 px-5 text-center md:text-left">
        <div className="h-1 w-full bg-gray-400 mask-r-from-0% mask-l-from-0%"></div>
        <p className="text-white text-sm md:text-base">
          © 2026 Muhammed Faris. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
