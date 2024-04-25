//import { addProduct } from "@/app/lib/actions";
"use client";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { useState } from "react";
//import UsersPage from "../page";
import Modal from "react-modal";

const AddUserPage = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    isAdmin: false,
    isActive: true,
  });
  // const [submittedData, setSubmittedData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      //[name]: value,
      [name]: value,
    }));
  };
  //console.log(formData);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement your logic to handle form submission
  //   //console.log(formData);
  //   setSubmittedData((prevData) => [...prevData, formData]);
  //   console.log(formData);
  //   setFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     address: "",
  //     isAdmin: false,
  //     isActive: true,
  //   });
  //};

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData); // Call the onAddUser function with the form data
    onClose(); // Close the modal
    setFormData({
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      isAdmin: false,
      isActive: true,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      // Add styles and classes
      className={styles.modalContent}
      // data={submittedData}
    >
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            required
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
            value={formData.isAdmin}
          >
            <option value={true}>Is Admin?</option>
            {/* <option value={true}>Yes</option> */}
            <option value={false}>No</option>
          </select>
          <select
            name="isActive"
            id="isActive"
            value={formData.isActive}
            onChange={handleChange}
          >
            <option value={true}>Is Active?</option>
            <option value={false}>No</option>
          </select>
          <textarea
            name="address"
            id="address"
            rows="6"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default AddUserPage;
