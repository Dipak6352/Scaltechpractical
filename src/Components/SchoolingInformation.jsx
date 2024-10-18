import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

const SchoolingInformation = () => {
  const [schoolingData, setSchoolingData] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};

    setSchoolingData(storedData["Schooling Information"] || {});
  }, []);

  return (
    <div className="container">
      <h4>Schooling Information</h4>
      {Object.keys(schoolingData).length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(schoolingData).map(([key, value], index) => (
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
        <p>No Schooling Information available</p>
      )}
    </div>
  );
};

export default SchoolingInformation;
