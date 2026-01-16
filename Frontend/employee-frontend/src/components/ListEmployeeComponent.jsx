import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./ListEmployeeComponent.css";

function ListEmployeeComponent() {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    EmployeeService.getAllEmployees()
      .then(response => {
        setEmployees(response.data);
      });
  };

  const deleteEmp = (id) => {
    EmployeeService.deleteEmployee(id)
      .then(() => {
        loadEmployees();
      });
  };

  return (
    <div className="container">

      <div className="header">
        <h2>Employee List</h2>
        <button className="add-btn" onClick={() => navigate("/add")}>
          + Add Employee
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.age}</td>
              <td>{emp.mobileNumber}</td>
              <td>{emp.department}</td>
              <td>
                 <button onClick={() => navigate(`/edit/${emp.id}`)}>
                Edit
                 </button>

                <button
                className="delete-btn"
                onClick={() => deleteEmp(emp.id)}
                 >
                 Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ListEmployeeComponent;
