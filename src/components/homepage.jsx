import React, { Component, useEffect } from "react";
import getData from "./apiCalls";

class Homepage extends Component {
  constructor() {
    super();
    // this.users = getData("http://127.0.0.1:8080/allusers", "GET");
  }

  render() {
    this.users = [];
    return (
      <>
        <table className="table p-4 bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
              </th>
              <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Username
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
            <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">1</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Jean Marc</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Louis</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Jl987</td>
            </tr>
            <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">2</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Eric</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Prouve</td>
              <td className="border-b-2 p-4 dark:border-dark-5">prouveE</td>
            </tr>
            <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">3</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Julien</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Clai</td>
              <td className="border-b-2 p-4 dark:border-dark-5">CJUL87</td>
            </tr>
            <tr className="text-gray-700">
              <td className="border-b-2 p-4 dark:border-dark-5">4</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Igor</td>
              <td className="border-b-2 p-4 dark:border-dark-5">Louth</td>
              <td className="border-b-2 p-4 dark:border-dark-5">IGL89_9</td>
            </tr>
          </tbody>
        </table>
        {this.users}
      </>
    );
  }
}
export default Homepage;
