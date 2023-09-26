import React from "react";
import "../Style/contact.css";
import { BsFillPersonFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHeart,
} from "react-icons/ai";
export default function Contact() {
  return (
    <>
      <div className="heading-container">
        <div className="line"></div>
        <h1 id="contact">Contacts</h1>
        <div className="line"></div>
      </div>
      <div className="contact-container">
        <div className="container-1">
          <form action="">
            <div className="input-container">
              <label htmlFor="Name">name</label>
              <input type="text" id="Name" placeholder="Name" />
            </div>
            <div className="input-container">
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" placeholder="Email" />
            </div>
            <div className="message-container">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                placeholder="Enter yout message"
              ></textarea>
            </div>
            <div className="send">
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className="container-2">
          <div className="container-2-1">
            <div className="icon-container-1">
              <BsFillPersonFill />
            </div>
            <div className="info-container">
              <h2>Name</h2>
              <h3>Mahesh Rathod</h3>
            </div>
          </div>
          <div className="container-2-1">
            <div className="icon-container-1">
              <ImLocation />
            </div>
            <div className="info-container">
              <h2>Address</h2>
              <h3>Kolhapur,maharashtra,india</h3>
            </div>
          </div>
          <div className="container-2-1">
            <div className="icon-container-1">
              <MdEmail />
            </div>
            <div className="info-container">
              <h2>Email</h2>
              <h3>mahesh956154@gmail.com</h3>
            </div>
          </div>
          <div className="social-meadia-icons">
            <a href="https://instagram.com/mahesh_rathod272?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
              <AiOutlineInstagram />
            </a>
            <a href="https://github.com/mahesh95-git">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-rathod-666507258/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
const Footer = () => {
  return (
    <div className="footer">
      <div>Made with </div>{" "}
      <div>
        <AiFillHeart />
      </div>
      <div>by mahesh Rathod</div>
    </div>
  );
};
