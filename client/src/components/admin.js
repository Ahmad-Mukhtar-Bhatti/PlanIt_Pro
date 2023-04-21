import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Modal, Table, Navbar, Nav } from "react-bootstrap";
import "./admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminScreen = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies("access_token");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3010/admin/user", { name });
      console.log("Received users:", response.data.users);
      setUsers(response.data.users);
      handleShow();
      setShowForm(false);
    } catch (error) {
      console.log("An error occurred");
    }
  };

  const handleFindUser = async () => {
    setShowForm(true);
  };






  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("User_ID");
    navigate("/login");
  };

  const getUsers = async () => {
    try {
      const response = await axios.post("http://localhost:3010/admin", {});
      console.log("Received users:", response.data.users);
      setUsers(response.data.users);
      handleShow();
    } catch (error) {
      console.log("An error occurred");
    }
  };



  // const findUser = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3010/admin/user", {});
  //     console.log("Received users:", response.data.users);
  //     setUsers(response.data.users);
  //     handleShow();
  //   } catch (error) {
  //     console.log("An error occurred");
  //   }
  // };


  return (
    <div className= "body">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src="/planitpro_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          PlanItPro
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <div className="container">
        {/* Profile */}
        <div className="profile">
          <img src="/planitpro_logo.png" alt="Profile Picture" />
          <h1>The Administrator</h1>
          <hr />
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button onClick={getUsers}>Show Users</button>
          <button onClick={handleFindUser}>Find User</button>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <label>
                 Name :
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
          {/* <button onClick = {findUser}>Find User</button> */}
          <button>Edit Profile</button>
        </div>

        {/* Users Modal */}
        <Modal show={show} onHide={handleClose} dialogClassName="scrollable-modal">
          <Modal.Header closeButton>
            <Modal.Title>All Names</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminScreen;
