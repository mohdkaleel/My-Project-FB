import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import "./CreateEmployeeComponent.css"; // reuse same form style

function UpdateEmployeeComponent() {

  const { id } = useParams();        // get employee id from URL
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    mobileNumber: "",
    department: ""
  });

  // Load employee data by ID
  useEffect(() => {
    EmployeeService.getEmployeeById(id).then(res => {
      setEmployee(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee).then(() => {
      alert("Employee Updated!");
      navigate("/");
    });
  };

  return (
    <div className="form-container">
      <h2>Update Employee</h2>

      <form onSubmit={updateEmployee}>
        <input name="firstName" value={employee.firstName} onChange={handleChange} />
        <input name="lastName" value={employee.lastName} onChange={handleChange} />
        <input name="email" value={employee.email} onChange={handleChange} />
        <input name="age" value={employee.age} onChange={handleChange} />
        <input name="mobileNumber" value={employee.mobileNumber} onChange={handleChange} />
        <input name="department" value={employee.department} onChange={handleChange} />

        <button type="submit" className="save-btn">
          Update Employee
        </button>
      </form>
    </div>
  );
}

export default UpdateEmployeeComponent;
