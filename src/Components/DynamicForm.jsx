import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DynamicForm = ({ json }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const [jsonStructure, setJsonStructure] = useState(json);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Effect to update form structure based on changes in json
  useEffect(() => {
    setJsonStructure(json);
  }, [json]);

  const handleChange = (group, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
    window.location.href = "/";
  };

  const renderField = (group, field) => {
    const commonProps = {
      className: "form-control custom-shadow border border-dark",
      name: field.name,
      placeholder: field.placeholder || "",
      required: field.required || false,
      onChange: (e) => handleChange(group, field.name, e.target.value),
      style: { fontSize: "12px", opacity: 0.7 },
    };

    switch (field.type) {
      case "text":
      case "number":
        return (
          <div className="col">
            <input
              type={field.type}
              value={formData[group]?.[field.name] || ""}
              {...commonProps}
            />
          </div>
        );
      case "textarea":
        return (
          <div className="col">
            <textarea
              {...commonProps}
              value={formData[group]?.[field.name] || ""}
            />
          </div>
        );
      case "dropdown":
        return (
          <div className="col">
            <select
              className="form-select border border-dark"
              name={field.name}
              value={formData[group]?.[field.name] || ""}
              {...commonProps}
            >
              <option value="">Select...</option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case "radio":
        return (
          <div className="col">
            {field.options.map((option, index) => (
              <div className="form-check form-check-inline" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formData[group]?.[field.name] === option.value}
                  required={field.required || false}
                  onChange={(e) => handleChange(group, field.name, e.target.value)}
                />
                <label className="form-check-label">{option.label}</label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="col">
            {field.options.map((option, index) => (
              <div className="form-check form-check-inline" key={index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={field.name}
                  value={option.value}
                  checked={formData[group]?.[field.name]?.includes(option.value) || false}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...(formData[group]?.[field.name] || []), option.value]
                      : formData[group]?.[field.name]?.filter(val => val !== option.value);
                    handleChange(group, field.name, newValue);
                  }}
                />
                <label className="form-check-label">{option.label}</label>
              </div>
            ))}
          </div>
        );
      case "slider":
        return (
          <div className="col col-12 col-md-6">
            <input
              type="range"
              className="form-range"
              style={{ width: "50%" }}
              name={field.name}
              min={field.min}
              max={field.max}
              step={field.step}
              value={formData[group]?.[field.name] || field.min}
              onChange={(e) => handleChange(group, field.name, e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form className="form-size" onSubmit={handleSubmit}>
      <h5 className="text-center mb-3 fw-semibold">
        {jsonStructure.form.title}
      </h5>

      {jsonStructure.form.groups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-4">
          <h6 className="mb-2">{group.title}</h6>
          <hr style={{ borderColor: "black" }} />
          <div className="row input">
            {group.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="mb-3">
                <label className="text-small fw-semibold mb-1">
                  {field.label}
                </label>
                {renderField(group.title, field)}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-dark w-100 my-4 rounded-0">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
