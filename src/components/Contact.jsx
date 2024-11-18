import { useState  } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import successAlert from "./SuccessModal";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css"
import { useTheme } from "../context/ThemeContext"; 




const links = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={30} />
        Linkedin
      </>
    ),
    href: "#",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={30} />
        Github
      </>
    ),
    href: "#",
  },
  {
    id: 3,
    child: (
      <>
        <FaInstagramSquare size={30} />
        Instagram
      </>
    ),
    href: "https://www.instagram.com/iam.davidc/",
  },
  {
    id: 4,
    child: (
      <>
        <BsWhatsapp size={30} />
        Whatsapp
      </>
    ),
    href: "https://wa.me/+2349013608339",
    style: "rounded-br-md",
  },
];

export default function Contact({ mode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1zbwcx",
        "template_ai3kwpa",
        form.current,
        "Lgqgp9V18KuyTXklT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.message);
        }
      );

    afterSend();
  };

  const afterSend = () => {
    setName("");
    setEmail("");
    setMessage("");
    successAlert();
  };
const { theme } = useTheme(); 
  return (
    <div id="contact">
      <div className={`contact ${theme}`} >
        <h1 className="contact-me">Contact Me</h1>

        <div>
          <div>
            <form ref={form} className={`contact-form ${theme}`} onSubmit={sendEmail}>
              <p className="md:text-lg text-md font-bold py-2 dark:text-slate-300 bg-clip-text">
                Name
              </p>
              <input
                type="text"
                name="user_name"
                className="name-input dark:bg-[#334155] dark:shadow-none shadow-lg dark:text-white "
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
              />
              <p>Email</p>
              <input
                type="email"
                name="user_email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              <p>Message</p>
              <textarea
                name="message"
                required
                id=""
                cols="30"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
              <div className="button-container">
              <button className="button1" type="submit">send</button>
              </div>
            </form>
          </div>

          <div>
            <div className="social-grid  grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {links.map(({ id, child, href, style }) => (
                <div
                  key={id}
                  className={`${style} rounded-md shadow-lg dark:border dark:shadow-none`}
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-black dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}