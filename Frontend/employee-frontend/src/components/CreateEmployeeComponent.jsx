import { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./CreateEmployeeComponent.css";

function CreateEmployeeComponent() {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    mobileNumber: "",
    department: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then(() => {
        alert("Employee Added!");
        navigate("/");
      });
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>

      <form onSubmit={saveEmployee}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} />
        <input name="department" placeholder="Department" onChange={handleChange} />

        <button type="submit" className="save-btn">
          Save Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmployeeComponent;
