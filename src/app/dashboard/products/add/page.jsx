//import { addProduct } from "@/app/lib/actions";
"use client";
import { useState } from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import Modal from "react-modal";

const AddProductPage = ({ isOpen, onClose, onAddProduct }) => {
  const [formData, setFormData] = useState({
    title: "",
    cat: "",
    price: "",
    stock: "",
    color: "",
    size: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData); // Call the onAddUser function with the form data
    onClose(); // Close the modal
    console.log(formData);
    setFormData({
      title: "",
      cat: "",
      price: "",
      stock: "",
      color: "",
      size: "",
      desc: "",
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
            placeholder="title"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <select
            name="cat"
            id="cat"
            value={formData.cat}
            onChange={handleChange}
          >
            <option value="">Choose a Category</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
          </select>
          <input
            type="number"
            placeholder="price"
            name="price"
            required
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="stock"
            name="stock"
            required
            value={formData.stock}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
          <textarea
            required
            name="desc"
            id="desc"
            rows="6"
            placeholder="Description"
            value={formData.desc}
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

export default AddProductPage;
