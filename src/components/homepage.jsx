import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import getData from "./apiCalls";

export default function Homepage() {
  let [users, setUsers] = useState([]);

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
    // setUsers(usersDb);
  }, []);

  return (
    <>
      <table className="table p-4 bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              #
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              First name
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Last name
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Username
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">{user.id}</td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {user.username}
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">Louis</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Jl987</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
