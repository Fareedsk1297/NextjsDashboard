"use client";
import React, { useState, useEffect } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/product.module.css";
import AddProductPage from "./add/page";

const ProductsPage = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    // Check local storage for data on component mount
    const storedData = localStorage.getItem("submittedData");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);
  const handleAddProduct = (productData) => {
    setSubmittedData((prevData) => [...prevData, productData]);
    localStorage.setItem(
      "submittedData",
      JSON.stringify([...submittedData, productData])
    );
    closeModal();
  };
  const handleDelete = (index) => {
    // Remove the data at the specified index from the submittedData array
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        {/* <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link> */}
        <button className={styles.addButton} onClick={openModal}>
          Add New
        </button>
        <AddProductPage
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddProduct={handleAddProduct}
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((productData, index) => (
            <tr key={index}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={"/noproduct.jpg"}
                    alt=""
                    width={20}
                    height={20}
                    className={styles.productImage}
                  />
                  {productData.title}
                </div>
              </td>
              <td>{productData.desc}</td>
              <td>${productData.price}</td>
              <td></td>
              <td>{productData.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/products/test">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" />
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
