import React from "react";
import { useLocation, useParams } from "react-router-dom";

export function Activity() {
  const activityName = useParams();
  const { activityData } = useLocation().state;

  return (
    <div>
      <table>
        <thead>
          <h3>{activityData.activity}</h3>
        </thead>
        <tbody>
          <tr>
            <td>Key</td>
            <td>{activityData.key}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{activityData.type}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{activityData.price}</td>
          </tr>
          <tr>
            <td>Participants</td>
            <td>{activityData.participants}</td>
          </tr>
          <tr>
            <td>Link</td>
            <td>{activityData.link}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
