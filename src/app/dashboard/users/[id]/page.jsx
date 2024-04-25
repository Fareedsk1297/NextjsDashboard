//import { updateUser } from "@/app/lib/actions";
//import { fetchUser } from "@/app/lib/data";
import { useState, useEffect } from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import Modal from "react-modal";

const SingleUserPage = ({
  isOpen,
  onClose,
  onUpdateUser,
  initialUserData,
  userData,
}) => {
  if (!initialUserData) {
    // Handle the case where initialUserData is not provided
    return null; // or display an error message
  }

  const [formData, setFormData] = useState({
    id: initialUserData.id || "",
    username: initialUserData.username || "",
    email: initialUserData.email || "",
    password: initialUserData.password || "",
    phone: initialUserData.phone || "",
    address: initialUserData.address || "",
    isAdmin: initialUserData.isAdmin || false,
    isActive: initialUserData.isActive || false,
  });

  useEffect(() => {
    setFormData(initialUserData);
  }, [initialUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData); // Call the onUpdateUser function with the form data
    onClose(); // Close the modal
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
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={"/noavatar.png"} alt="" fill />
          </div>
          {/* Display the username from formData */}
          {formData.username}
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            {/* Hidden input for user ID */}
            <input type="hidden" name="id" value={formData.id} />
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="John Doe"
              onChange={handleChange}
              value={formData.username}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              onChange={handleChange}
              value={formData.email}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="0123400"
              onChange={handleChange}
              value={formData.phone}
            />
            <label>Address</label>
            <textarea
              type="text"
              name="address"
              placeholder="India"
              onChange={handleChange}
              value={formData.address}
            />
            <label>Is Admin?</label>
            <select
              name="isAdmin"
              id="isAdmin"
              onChange={handleChange}
              value={formData.isAdmin}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select
              name="isActive"
              id="isActive"
              onChange={handleChange}
              value={formData.isActive}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SingleUserPage;
