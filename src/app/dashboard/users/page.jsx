// //import { deleteUser } from "@/app/lib/actions";
// //import { fetchUsers } from "@/app/lib/data";
// "use client";
// import { useState, useEffect } from "react";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import Search from "@/app/ui/dashboard/search/search";
// import styles from "@/app/ui/dashboard/users/users.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import AddUserPage from "./add/page";
// import SingleUserPage from "./[id]/page";

// const UsersPage = () => {
//   // const q = searchParams?.q || "";
//   // const page = searchParams?.page || 1;
//   // const { count, users } = await fetchUsers(q, page);
//   const [submittedData, setSubmittedData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
//   // const [selectedUserId, setSelectedUserId] = useState(null);
//   // const [users, setUsers] = useState([
//   //   {
//   //     id: 1,
//   //     username: "John Doe",
//   //     email: "john.doe@example.com",
//   //     isAdmin: false,
//   //     isActive: true,
//   //   },
//   //   // Add other user data as needed
//   // ]);
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   // useEffect(() => {
//   //   // Check local storage for data on component mount
//   //   const storedData = localStorage.getItem("submittedData");
//   //   if (storedData) {
//   //     setSubmittedData(JSON.parse(storedData));
//   //   }
//   // }, []);
//   const handleAddUser = (userData) => {
//     setSubmittedData((prevData) => [...prevData, userData]);
//     // localStorage.setItem(
//     //   "submittedData",
//     //   JSON.stringify([...submittedData, userData])
//     // );
//     closeModal();
//   };

//   const handleDelete = (index) => {
//     // Remove the data at the specified index from the submittedData array
//     const newData = [...submittedData];
//     newData.splice(index, 1);
//     setSubmittedData(newData);
//   };

//   // update user
//   // const openUpdateModal = (userId) => {
//   //   setSelectedUserId(userId);
//   //   setUpdateModalOpen(true);
//   // };
//   // Get the selected user's data
//   //const selectedUserData = users.find((user) => user.id === selectedUserId);
//   const handleUpdateUser = (userData) => {
//     // setUsers((prevUsers) =>
//     //   prevUsers.map((user) =>
//     //     user.id === updatedUserData.id ? updatedUserData : user
//     //   )
//     //  );
//     // closeUpdateModal();
//     setSubmittedData((prevData) => [...prevData, userData]);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <Search placeholder="Search for a user..." />
//         {/* <Link href="/dashboard/users/add">
//           <button className={styles.addButton} onClick={openModal}>Add New</button>
//         </Link> */}
//         <button className={styles.addButton} onClick={openModal}>
//           Add New
//         </button>
//         <AddUserPage
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onAddUser={handleAddUser}
//         />
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             {/* <td>Created At</td> */}
//             <td>Role</td>
//             <td>Status</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedData?.map((userData, index) => (
//             <tr key={index}>
//               <td>
//                 <div className={styles.user}>
//                   <Image
//                     src={"/noavatar.png"}
//                     alt=""
//                     width={20}
//                     height={20}
//                     className={styles.userImage}
//                   />
//                   {userData.username}
//                 </div>
//               </td>
//               <td> {userData.email}</td>
//               <td> {userData.isAdmin ? "User" : "Admin"}</td>
//               <td> {userData.isActive ? "Yes" : "No"}</td>
//               <td>
//                 <div className={styles.buttons}>
//                   {/* <Link href="/dashboard/users/test"> */}
//                   <button
//                     className={`${styles.button} ${styles.view}`}
//                     onClick={openModal}
//                     // onClick={() => openModal(selectedUserId)}
//                   >
//                     View
//                   </button>
//                   <SingleUserPage
//                     isOpen={isModalOpen}
//                     onClose={closeModal}
//                     onUpdateUser={handleUpdateUser}
//                     //initialUserData={selectedUserData}
//                   />
//                   {/* </Link> */}
//                   <form action="">
//                     <input type="hidden" name="id" />
//                     <button
//                       className={`${styles.button} ${styles.delete}`}
//                       onClick={handleDelete}
//                     >
//                       Delete
//                     </button>
//                   </form>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination />
//     </div>
//   );
// };

// export default UsersPage;

// Import necessary libraries and components
"use client";
import { useState } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import AddUserPage from "./add/page";
import SingleUserPage from "./[id]/page";

// Define the UsersPage component
const UsersPage = () => {
  // State to manage submitted user data
  const [submittedData, setSubmittedData] = useState([]);
  // State to manage modal visibility for adding a new user
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to manage modal visibility for updating an existing user
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  // State to manage the selected user's ID for updating
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Function to open the modal for adding a new user
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal for adding a new user
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle adding a new user
  const handleAddUser = (userData) => {
    setSubmittedData((prevData) => [...prevData, userData]);
    closeModal();
  };

  // Function to handle deleting a user
  const handleDelete = (index) => {
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  };

  // Function to open the modal for updating a user
  const openUpdateModal = (userId) => {
    setSelectedUserId(userId);
    setUpdateModalOpen(true);
  };

  // Function to close the modal for updating a user
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  // Function to handle updating a user
  const handleUpdateUser = (updatedUserData) => {
    const userIndex = submittedData.findIndex(
      (user) => user.id === updatedUserData.id
    );
    if (userIndex !== -1) {
      // Update only the specific user
      setSubmittedData((prevData) => [
        ...prevData.slice(0, userIndex), // Elements before the updated user
        updatedUserData, // Updated user
        ...prevData.slice(userIndex + 1), // Elements after the updated user
      ]);
    }
    closeUpdateModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <button className={styles.addButton} onClick={openModal}>
          Add New
        </button>
        <AddUserPage
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddUser={handleAddUser}
        />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {submittedData?.map((userData, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={20}
                    height={20}
                    className={styles.userImage}
                  />
                  {userData.username}
                </div>
              </td>
              <td> {userData.email}</td>
              <td> {userData.isAdmin ? "User" : "Admin"}</td>
              <td> {userData.isActive ? "Yes" : "No"}</td>
              <td>
                <div className={styles.buttons}>
                  <button
                    className={`${styles.button} ${styles.view}`}
                    onClick={() => openUpdateModal(userData.id)}
                  >
                    View
                  </button>
                  <SingleUserPage
                    isOpen={isUpdateModalOpen}
                    onClose={closeUpdateModal}
                    onUpdateUser={handleUpdateUser}
                    initialUserData={userData}
                    userData={userData}
                  />
                  <form action="">
                    <input type="hidden" name="id" />
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={() => handleDelete(index)}
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

export default UsersPage;
