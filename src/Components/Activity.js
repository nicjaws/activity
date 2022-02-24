import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../App.css";




export function Activity() {
  const activityName = useParams();
  const { activityData } = useLocation().state;
  const navigate = useNavigate();

  return (
    <div>
      <table>
        <thead>
          <h3>{activityData.activity}</h3>
        </thead>
        <tbody>
          <tr>
            <td className="alignLeft">Key</td>
            <td className="alignRight">{activityData.key}</td>
          </tr>
          <tr>
            <td className="alignLeft">Type</td>
            <td className="alignRight">{activityData.type}</td>
          </tr>
          <tr>
            <td className="alignLeft">Price</td>
            <td className="alignRight">{activityData.price}</td>
          </tr>
          <tr>
            <td className="alignLeft">Participants</td>
            <td className="alignRight">{activityData.participants}</td>
          </tr>
          <tr>
            <td className="alignLeft">Link</td>
            <td className="alignRight">{activityData.link}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
}
