import React, { useState, useEffect } from "react";
import getData from "./apiCalls";

export default function Homepage() {
  let [users, setUsers] = useState([1, 2]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/allusers", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setUsers(response);
      });
  }, []);

  function display() {
    console.log(users);
  }

  return (
    <>
      <button onClick={display}>Show</button>
      <table className="table p-4 bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              #
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              UserName
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Email
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            // <h1>f</h1>;
            return (
              <tr className="text-gray-700" key={user.id}>
                <td className="border-b-2 p-4 dark:border-dark-5">{user.id}</td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  {user.username}
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  {user.email}
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  {user.password}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {users.length}
    </>
  );
}
