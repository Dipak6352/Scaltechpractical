import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

const HobbiesAndInterests = () => {
  const [hobbiesData, setHobbiesData] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};

    setHobbiesData(storedData["Hobbies and Interests"] || {});
  }, []);

  return (
    <div className="container">
      <h4>Hobbies and Interests</h4>
      {Object.keys(hobbiesData).length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(hobbiesData).map(([key, value], index) => (
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
        <p>No Hobbies and Interests available</p>
      )}
    </div>
  );
};

export default HobbiesAndInterests;
