import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [values, setValues] = useState("");

  return (
    <div className="flex m-10 ">
      <div className="flex gap-3">
        <div className="flex flex-col justify-center items-center p-3 gap-3 backdrop-blur-3xl shadow-2xl bg-white/10 rounded-2xl ">
          <div className=" flex flex-col items-center justify-center">
            <h1>Send a Message</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full rounded h-full gap-3">
            <input
              placeholder="Name"
              className="h-8 w-150  p-2 outline-none border-2 rounded-lg"
              required
              type="text"
            />
            <input
              placeholder="Email"
              className="h-8 w-150 p-2 outline-none border-2 rounded-lg"
              required
              type="email"
            />
            <input
              placeholder="Phone"
              className="h-8 w-150 p-2 outline-none border-2 rounded-lg"
              required
              type="tel"
            />
            <select
              value={values}
              onChange={(e) => setValues(e.target.value)}
              className="h-8 w-150 outline-none border-2 rounded-lg"
              required
            >
              <option value="" disabled>
                Select An Option
              </option>
              <option value="Job Enquiry">Job Enquiry</option>
              <option value="Collaborations">Collaborations</option>
              <option value="Project Enquiry">Project Enquiry</option>
              <option value="Freelance">Freelance</option>
              <option value="Consultants">Consultants</option>
            </select>
            <textarea className="h-20 w-150 outline-none border-2 rounded-lg"></textarea>
            <div className="h-15">
              <button className="h-8 w-150 outline-none border-2 rounded-lg">
                submit
              </button>
            </div>
          </div>
        </div>

        {/* contacts */}

        <div className="flex flex-col gap-4 backdrop-blur-3xl shadow-2xl rounded-2xl h-fit p-5">
          <div className="flex justify-center items-center">
            <h1>Quick Contact</h1>
          </div>

          {/* email */}

          <div >
            <div className="flex gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="orange"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h1>Email</h1>
            </div>
            <div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammedfariis101@gmail.com">
                muhammedfariis101@gmail.com
              </a>
              <p>Response within 24 hours</p>
            </div>
          </div>

{/* phone */}
          <div>
            <div className="flex gap-2">
                  <svg
                      class="w-6 h-6 text-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
              <h1>Phone</h1>

            </div>
            <div>
              <h2>9562166107</h2>
              <p>You can call anytime 24x7</p>
            </div>
          </div>{" "}

          {/* location */}
          <div >
            <div className="flex gap-1.5">
                      <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
              <h1>Location</h1>
            </div>
            <div>
              <h2>Remote/Global</h2>
              <p>Open to relocation for the right opportunity</p>
            </div>
          </div>
        </div>

        {/* connect social */}
        <div className="flex flex-col gap-5 backdrop-blur-3xl shadow-2xl rounded-2xl h-fit p-5">
            <div className="flex justify-center items-center">
                <h1>Connect on Social Media</h1>
            </div>
     
        <div className="flex gap-4 w-full ">
            
            {/* div 1 */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center border-2 w-60 gap-1 rounded-2xl ">
                      <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 text-black hover:scale-95  transition duration-300 "
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.12-3.13 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.63.24 2.83.12 3.13.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
                <div className="">
                   <h1>GitHub</h1>
                   <h6>View Codes</h6> 
                </div>
            </div>

             <div className="flex items-center border-2 gap-1 w-60 rounded-2xl ">
              <a href="https://www.linkedin.com/jobs/muhammedfariis">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 rounded bg-white hover:scale-95  transition duration-300 "
              >
                <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3zM9.98 8.98h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.3c0-1.26-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8V21h-4z" />
              </svg>
            </a>
                <div className="">
                   <h1>LinkedIn</h1>
                   <h6>Connect</h6> 
                </div>
            </div>
            </div>
{/* div2 */}
        
                <div className="flex flex-col gap-5">
              <div className="flex items-center border-2 w-60 gap-1 rounded-2xl ">
               <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 text-black rounded hover:scale-95  transition duration-300 "
              >
                <path  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.507 5.507 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.504 3.504 0 0112 16.5zM18 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
                <div className="">
                   <h1>Instagram</h1>
                   <h6>Follow</h6> 
                </div>
            </div>

             <div className="flex items-center border-2 gap-1 w-60 rounded-2xl ">
                 <a
                    href="https://wa.me/919562166107"
                    
                  >
                    <svg
                      class="w-8 h-7  rounded hover:scale-95  transition duration-300 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.35 11.91-11.91a11.84 11.84 0 0 0-3.46-8.43ZM12.07 21.4a9.44 9.44 0 0 1-4.81-1.31l-.34-.2-3.74.98 1-3.65-.22-.37a9.45 9.45 0 1 1 8.11 4.55Zm5.18-7.07c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.41-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35s1 2.73 1.14 2.92c.14.19 1.97 3.01 4.78 4.22.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z"
                      />
                    </svg>
                </a>
                <div className="">
                   <h1>WhatsApp</h1>
                   <h6>Chat With Me</h6> 
                </div>
            </div>
            </div>
            </div>

            
            
        </div>
      </div>
       </div>
  );
};

export default Contact;
