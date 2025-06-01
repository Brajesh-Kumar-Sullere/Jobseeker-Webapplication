import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Brajesh Sullere.</div>
      <div>
        <Link to={"https://www.facebook.com/brajesh.sullere"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/brajesh-sullere-333009318/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/pt_brajesh_6354?igsh=MWl0MzdzNjgwcGp5cg=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
