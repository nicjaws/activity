import React, { Component } from "react";
import { getApiInformation } from "../Services/getApiInformation";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends Component {
  state = {
    dataArray: [],
  };

  componentDidMount = () => {
    const array = new Array(7).fill(1);

    const getApiInformationAeguments = {
      array:
        this.state.dataArray.length === 0 ? new Array() : this.state.dataArray,
      setArray: (array) => this.setState({ dataArray: array }),
    };

    array.forEach(() => {
      getApiInformation(getApiInformationAeguments);
    });
  };

  getActivitiesList = () => {
    let activitiesArray = [];
    this.state.dataArray.forEach((data) => {
      activitiesArray.push(
        <tr>
          <Link
            to={`/activity/${data.activity}`}
            state={{ activityData: data }}
          >
            <td>{data.activity}</td>
          </Link>
          <td className="alignRight">{data.price}$</td>
        </tr>
      );
    });
    return activitiesArray;
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
              <td>
                <h3>Activity</h3>
              </td>
              <td className="alignRight">
                <h3>Price</h3>
              </td>
            </tr>
          {this.state.dataArray.length && this.state.dataArray.length > 0 ? (
            this.getActivitiesList()
          ) : (
            <td>Loading ...</td>
          )}
        </tbody>
      </table>
    );
  }
}

export default Home;
