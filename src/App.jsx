import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import formConfig from "./formConfigure.json"; // Import the JSON


import ContactInformation from "./Components/ContactInformation"; 
import Layout from "./Components/Layout"; 
import "./App.css";
import DynamicForm from "./Components/DynamicForm";
import SchoolingInformation from "./Components/SchoolingInformation";
import HobbiesAndInterests from "./Components/HobbiesAndInterest";
import EmploymentInformation from "./Components/EmploymentInformation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout groups={formConfig.form.groups} />}>
          <Route index element={<DynamicForm json={formConfig} />} />
          {formConfig.form.groups.map((group, index) => (
            <Route
              key={index}
              path={`form/${index}`}
              element={(() => {
                switch (group.title) {
                  case "Schooling Information":
                    return <SchoolingInformation group={group} />;
                  case "Employment Details":
                    return <EmploymentInformation group={group} />;
                  case "Hobbies and Interests":
                    return <HobbiesAndInterests group={group} />;
                  default:
                    return <ContactInformation group={group} />;
                }
              })()}
            />
          ))}
          <Route path="*" element={<h2>Select a form section</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
