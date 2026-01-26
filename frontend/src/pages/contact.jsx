import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [values, setValues] = useState("");
  const [submit, setSubmit] = useState("");

  const submitForm = (e) => {
    setSubmit("");
  };
 
  return (
    <div className="overflow-hidden relative min-h-screen items-center justify-center flex text-white px-4">
      <video
        className="absolute w-full h-full object-cover"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/public/videos/secondbg.mp4" />
      </video>

      <div className="flex flex-col lg:flex-row flex-wrap gap-6 p-5 max-w-6xl w-full justify-center">
        <div className="flex flex-col justify-center items-center p-4 gap-3 backdrop-blur-3xl shadow-2xl bg-white/10 rounded-2xl w-full lg:max-w-lg">
          <h1 className="font-bold text-2xl">Send a Message</h1>

          <form
            className="flex flex-col w-full max-w-full overflow-hidden rounded gap-3"
            onSubmit={submitForm}
          >
            <input
              onChange={(e) => setSubmit(e.target.value)}
              placeholder="Name"
              className="h-12 w-full p-2 outline-none backdrop-blur-3xl shadow-2xl rounded-lg"
              required
              type="text"
            />

            <input
              onChange={(e) => setSubmit(e.target.value)}
              placeholder="Email"
              className="h-12 w-full p-2 backdrop-blur-3xl outline-none shadow-2xl rounded-lg"
              required
              type="email"
            />

            <input
              onChange={(e) => setSubmit(e.target.value)}
              placeholder="Phone"
              className="h-12 w-full p-2 outline-none backdrop-blur-3xl shadow-2xl rounded-lg"
              required
              type="tel"
            />

            <select
              value={values}
              onChange={(e) => setValues(e.target.value)}
              className="h-12 p-1 w-full max-w-full outline-none backdrop-blur-3xl shadow-2xl rounded-lg truncate"
              required
            >
              <option value="" disabled>
                Select An Option
              </option>

              <option
                className="bg-purple-950 text-white max-w-full whitespace-normal"
                value="Job Enquiry"
              >
                Job Enquiriy
              </option>
              <option
                className="bg-purple-950 text-white max-w-full whitespace-normal"
                value="Collaborations"
              >
                Collaborations
              </option>
              <option
                className="bg-purple-950 text-white max-w-full whitespace-normal"
                value="Project Enquiry"
              >
                Project Enquiry
              </option>
              <option
                className="bg-purple-950 text-white max-w-full whitespace-normal"
                value="Freelance"
              >
                Freelance
              </option>
              <option
                className="bg-purple-950 text-white max-w-full whitespace-normal"
                value="Consultants"
              >
                Consultants
              </option>
            </select>

            <textarea
              onChange={(e) => setSubmit(e.target.value)}
              placeholder="Tell about your project or opportunity..."
              className="h-30 w-full p-2 outline-none backdrop-blur-3xl shadow-2xl rounded-lg"
            ></textarea>

            <div className="h-15 flex items-center justify-center">
              <button
                type="submit"
                className="h-12 w-60 bg-linear-to-bl text-black text-lg from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-4 backdrop-blur-3xl h-fit shadow-2xl rounded-2xl p-5 w-full sm:w-80">
          <h1 className="font-bold text-2xl text-center">Quick Contact</h1>

          <div>
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h1>Email</h1>
            </div>
            <a className="text-sm" href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammedfariis101@gmail.com">
              muhammedfariis101@gmail.com
            </a>
            <p>Response within 24 hours</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h1>Phone</h1>
            </div>
            <h2>9562166107</h2>
            <p>You can call anytime 24x7</p>
          </div>

          {/* Location */}
          <div>
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <h1>Location</h1>
            </div>
            <h2>Remote/Global</h2>
            <p>Open to relocation opportunities</p>
          </div>
        </div>

        <div className="flex backdrop-blur-3xl  shadow-2xl w-full max-w-md p-5  justify-center rounded-2xl gap-2 flex-col items-center">
          <h1 className="text-lg font-bold">Download Resume</h1>

          <p className="text-md text-center">
            Full-stack developer open to relocation
          </p>
          <p className="text-md text-center">
            you can download this PDF to view my resume.
          </p>

          <Link
            to="/public/pdf/MuhammedFaris_resume.pdf"
            target="_blank"
            download
          >
            <button className="w-55 max-w-sm  h-10 text-lg  bg-linear-to-bl from-yellow-400 border-2 border-gray-600 rounded-2xl transition duration-300 ease-in-out hover:scale-105">
              Download
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
