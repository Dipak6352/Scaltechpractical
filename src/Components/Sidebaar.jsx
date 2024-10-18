import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPhone } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  "Contact Information": faUser,
  "Schooling Information": faGraduationCap,
  "Employment Details": faBriefcase,
  "Hobbies and Interests": faHiking,
};

const Sidebaar = ({ groups }) => {
  return (
    <>
      <div className="col-2 col-sm-4 col-md-3 position-sticky top-0 bottom-0 col-lg-2 p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="bg-white text-dark min-vh-100 d-flex justify-content-between flex-column sidebar-shadow">
              <div>
                <div className="pt-3">
                  <div className="text-dark fs-4 ms-2 fw-medium mb-3">
                    <Link className="text-decoration-none" to="/">
                      <p className="text-dark fw-semibold">
                        {" "}
                        <span className="d-none d-sm-block">Personal</span>
                      </p>
                    </Link>
                  </div>
                </div>

                <ul className="nav d-flex flex-column justify-content-center">
                  {groups.map((group, index) => (
                    <li
                      key={index}
                      className="nav-item d-flex mb-1 me-1 me-md-2 justify-content-center text-dark justify-content-sm-start"
                    >
                      <Link
                        to={`/form/${index}`}
                        className="text-decoration-none my-1 py-1 text-small mx-2 text-dark fw-medium text-nowrap"
                      >
                        <FontAwesomeIcon icon={iconMapping[group.title]} />
                        <span className="d-none ms-sm-3 d-sm-inline">
                          {group.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex flex-column text-white justify-content-center">
                <ul className="nav d-flex flex-column justify-content-center">
                  <li className="nav-item d-flex mb-1 justify-content-center text-dark justify-content-sm-start">
                    <Link
                      to={"/"}
                      className="text-decoration-none my-1 py-0 text-small mx-2 text-dark fw-medium text-nowrap"
                    >
                      <FaPhone />

                      <span className="d-none ms-sm-3 d-sm-inline">
                        Grade Point Average
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item d-flex mb-3 justify-content-center text-dark justify-content-sm-start">
                    <Link
                      to={"/"}
                      className="text-decoration-none my-1 py-1 text-small mx-2 text-dark fw-medium text-nowrap"
                    >
                      <FaStar />

                      <span className="d-none ms-md-3 d-sm-inline">
                        Do You Participate in{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar end */}
    </>
  );
};

export default Sidebaar;
