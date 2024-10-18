import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import profile from "../images/profile.jpg";
import { FaChevronDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaStar, FaUserEdit } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import Sidebaar from "./Sidebaar";

const Layout = ({ groups }) => {
  const [contactData, setContactData] = useState({});
  const [showHighestModal, setShowHighestModal] = useState(false);
  const [showGraduationModal, setShowGraduationModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [highestQualification, setHighestQualification] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [skills, setSkills] = useState([]);
  const [levelOfInterest, setLevelOfInterest] = useState("");

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
   
    setContactData(storedData["Contact Information"] || {});
  }, []);

  const handleHighestClick = () => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const qualification =
      storedData["Schooling Information"] ||
    setHighestQualification(qualification);
    setShowHighestModal(true);
  };

  const handleGraduationClick = () => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const year =
      storedData["Schooling Information"] ||
      "No graduation year data available";
    setGraduationYear(year);
    setShowGraduationModal(true);
  };

  const handleSkillsClick = () => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const skillsData =
      storedData["Employment-information"] || "No skills data available";
    setSkills(skillsData);
    setShowSkillsModal(true);
  };

  const handleInterestClick = () => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const interest =
      storedData["Hobbies and Interests"] ||
      "No level of interest data available";
    setLevelOfInterest(interest);
    setShowInterestModal(true);
  };

  const handleCloseModal = () => {
    setShowHighestModal(false);
    setShowGraduationModal(false);
    setShowSkillsModal(false);
    setShowInterestModal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar start */}
        <Sidebaar groups={groups} />

        {/* Header start */}
        <div className="col-10 col-sm-8 col-md-9 col-lg-10 p-0">
          <div className="container-fluid p-0 d-flex px-5 py-2 justify-content-between align-items-center">
            <Link className="text-decoration-none" to="/">
              <div className="text-dark fw-semibold">Personal</div>
            </Link>

            <div className="right-person d-flex align-items-center">
              <IoMdNotifications />
              <div className="d-inline-block ms-2">
                <img
                  width="30px"
                  height="30px"
                  className="img-fluid rounded-circle"
                  src={profile}
                  alt="Profile"
                />
                {contactData?.fullName ? (
                  <span
                    style={{ fontSize: "10px" }}
                    className="text-dark fw-medium ms-2"
                  >
                    {contactData.fullName}
                  </span>
                ) : (
                  <span
                    style={{ fontSize: "10px" }}
                    className="text-dark fw-medium ms-2"
                  >
                    userName
                  </span>
                )}
              </div>
              <span className="ms-2" style={{ cursor: "pointer" }}>
                <FaChevronDown />
              </span>
            </div>
          </div>

          <div className="row px-4 w-75">
            <ul className="nav d-flex flex-row justify-content-around">
              {[
                {
                  to: "#",
                  icon: <FaUserEdit />,
                  label: "Highest",
                  action: handleHighestClick,
                },
                {
                  to: "#",
                  icon: <FaGraduationCap />,
                  label: "Graduation Year",
                  action: handleGraduationClick,
                },
                {
                  to: "#",
                  icon: <GiSkills />,
                  label: "Skills",
                  action: handleSkillsClick,
                },
                {
                  to: "#",
                  icon: <FaStar />,
                  label: "Level of Interest",
                  action: handleInterestClick,
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="nav-item d-flex justify-content-center text-dark justify-content-sm-start"
                >
                  <Link
                    to={item.to}
                    onClick={item.action}
                    className="text-decoration-none my-1 py-1 text-small mx-2 text-dark fw-medium text-nowrap"
                  >
                    {item.icon}
                    <span className="d-none ms-1 ms-md-2 d-sm-inline">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr />
          </div>

          <div
            style={{ height: "85vh" }}
            className="container-fluid ms-1 ms-md-5 overflow-scroll"
          >
            <Outlet />
          </div>

          {/* Highest Qualification Modal */}
          <div
            className={`modal fade ${showHighestModal ? "show" : ""}`}
            style={{ display: showHighestModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Highest Qualification</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning fw-medium">
                    your qualification is{" "}
                    <span className="ms-2 text-danger">
                      {highestQualification.qualification}
                    </span>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Graduation Year Modal */}
          <div
            className={`modal fade ${showGraduationModal ? "show" : ""}`}
            style={{ display: showGraduationModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Graduation Year</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning fw-medium">
                    your passout year is{" "}
                    <span className="ms-2 text-danger">
                      {highestQualification.graduationYear}
                    </span>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Modal */}
          <div
            className={`modal fade ${showSkillsModal ? "show" : ""}`}
            style={{ display: showSkillsModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Skills</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning fw-medium">
                    your skills is{" "}
                    <span className="ms-2 text-danger">{skills[1]}</span>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Level of Interest Modal */}
          <div
            className={`modal fade ${showInterestModal ? "show" : ""}`}
            style={{ display: showInterestModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Level of Interest</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning fw-medium">
                    {" "}
                    your tech interest is
                    <span className="text-danger ms-2">
                      {levelOfInterest.techInterest}/10
                    </span>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header end */}
      </div>
    </div>
  );
};

export default Layout;
