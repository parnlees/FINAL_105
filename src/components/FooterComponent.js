import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/photogallery">Photo Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>My University</h5>
            <address>
              King Mongkut's University of Technology Thonburi
              <br />
              126 Pracha Uthit Rd., Bang Mod,
              <br />
              Thung Khru, Bangkok 10140, Thailand.
              <br />
              <i className="fa fa-phone fa-lg"></i>: +66 2470 8116
              <br />
              <i className="fa fa-fax fa-lg"></i>: +66 2470 8118
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">treasury@kmutt.ac.th.</a>
            </address>
          </div>

          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/parn.yanisa.7"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Yanisa's Final Exam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
