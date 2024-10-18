import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

const EmploymentInformation = () => {
  const [employmentData, setEmploymentData] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};

    setEmploymentData(storedData["Employment Details"] || {});
  }, []);

  return (
    <div className="container">
      <h4>Employment Information</h4>
      {Object.keys(employmentData).length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(employmentData).map(([key, value], index) => (
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
        <p>No Employment Information available</p>
      )}
    </div>
  );
};

export default EmploymentInformation;
