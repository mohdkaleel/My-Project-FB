## Technical Design Document (v1)

### Database Model
Employee:
- id (Long, PK)
- firstName (String, Required)
- lastName (String)
- email (String)
- age  (Int)
- mobilenumber(Int)
- department(String)


### API Contract
POST /api/employees
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@email.com"
  "age": "29"
  "mobilenumber":"859856985"
  "department": "Mechanic"

}
