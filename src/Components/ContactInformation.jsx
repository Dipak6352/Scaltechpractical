import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactInformation = () => {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    // Extract only the Contact Information data
    setContactData(storedData["Contact Information"] || {});
  }, []);

  return (
    <div className="container">
      <h4>Contact Information</h4>
      {Object.keys(contactData).length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(contactData).map(([key, value], index) => (
              <tr
                style={{ fontSize: "12px" }}
                className=" fw-medium"
                key={index}
              >
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Contact Information available</p>
      )}
    </div>
  );
};

export default ContactInformation;
